function debounce(this: void, func: any, wait: number, immediate: boolean) {
  let timeout: any;
  return () => {
    let context = this;
    let args = arguments;
    let later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function useOnScreen(
  classNames: string[],
  animationClassNames: string[],
  offset = 0,
  useDebounce = true
) {
  window.onload = () => {
    window.onscroll = (e: Event) => {
      for (let i = 0; i < classNames.length; i++) {
        let elements = [...document.getElementsByClassName(classNames[i])];
        if (useDebounce) {
          debounce(
            (() => {
              elements.forEach((element) => {
                if (!element.classList.contains(animationClassNames[i])) {
                  if (
                    element.getBoundingClientRect().top <
                    window.innerHeight - offset
                  ) {
                    element.classList.add(animationClassNames[i]);
                  }
                }
              });
            })(),
            500,
            false
          );
        } else {
          elements.forEach((element) => {
            if (!element.classList.contains(animationClassNames[i])) {
              if (
                element.getBoundingClientRect().top <
                window.innerHeight - offset
              ) {
                element.classList.add(animationClassNames[i]);
              }
            }
          });
        }
      }
    };
  };
}

export default useOnScreen;
