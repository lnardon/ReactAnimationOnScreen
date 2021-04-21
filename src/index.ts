function useOnScreen(
  classNames: string[],
  animationClassNames: string[],
  offset = 0,
  onlyOnScreen = false
) {
  window.onload = () => {
    for (let i = 0; i < classNames.length; i++) {
      let elements = [...document.getElementsByClassName(classNames[i])];
      elements.forEach((element) => {
        if (!element.classList.contains(animationClassNames[i])) {
          if (onlyOnScreen) {
            if (
              element.getBoundingClientRect().top <
                window.innerHeight - offset &&
              element.getBoundingClientRect().bottom
            ) {
              element.classList.add(animationClassNames[i]);
            }
          } else {
            if (
              element.getBoundingClientRect().top <
              window.innerHeight - offset
            ) {
              element.classList.add(animationClassNames[i]);
            }
          }
        }
      });
    }
    window.onscroll = () => {
      for (let i = 0; i < classNames.length; i++) {
        let elements = [...document.getElementsByClassName(classNames[i])];
        elements.forEach((element) => {
          if (!element.classList.contains(animationClassNames[i])) {
            if (onlyOnScreen) {
              if (
                element.getBoundingClientRect().top <
                  window.innerHeight - offset &&
                element.getBoundingClientRect().bottom
              ) {
                element.classList.add(animationClassNames[i]);
              }
            } else {
              if (
                element.getBoundingClientRect().top <
                window.innerHeight - offset
              ) {
                element.classList.add(animationClassNames[i]);
              }
            }
          }
        });
      }
    };
  };
}

export default useOnScreen;
