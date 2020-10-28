function debounce(this: void, func: any, wait: number, immediate: boolean) {
  var timeout: any;
  return () => {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function useOnScreen(
  className: string,
  classNameAnimation: string,
  offset = 0,
  useDebounce?: boolean
) {
  window.onload = () => {
    let elements = [...document.getElementsByClassName(className)];
    window.onscroll = (e: Event) => {
      if (useDebounce) {
        debounce(
          (() => {
            elements.forEach((element) => {
              if (element.classList.contains(classNameAnimation)) {
                if (
                  element.getBoundingClientRect().top <
                  window.innerHeight - offset
                ) {
                  element.classList.add(classNameAnimation);
                }
              }
            });
          })(),
          500,
          false
        );
      } else {
        elements.forEach((element) => {
          if (element.classList.contains(classNameAnimation)) {
            if (
              element.getBoundingClientRect().top <
              window.innerHeight - offset
            ) {
              element.classList.add(classNameAnimation);
            }
          }
        });
      }
    };
  };
}

export default useOnScreen;