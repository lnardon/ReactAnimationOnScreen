function useOnScreen(
  classNames: string[],
  animationClassNames: string[],
  offset = 0,
  onlyOnScreen = false
) {
  const isOnScreen = (element: DOMRect) => {
    return (
      element.top >= 0 &&
      element.left >= 0 &&
      element.bottom <=
        (window.innerHeight - offset ||
          document.documentElement.clientHeight) &&
      element.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  window.onload = () => {
    for (let i = 0; i < classNames.length; i++) {
      let elements = [...document.getElementsByClassName(classNames[i])];
      elements.forEach((element) => {
        let elementBound = element.getBoundingClientRect();
        if (onlyOnScreen) {
          if (isOnScreen(elementBound)) {
            element.classList.add(animationClassNames[i]);
          } else if (element.classList.contains(animationClassNames[i])) {
            element.classList.remove(animationClassNames[i]);
          }
        } else {
          if (!element.classList.contains(animationClassNames[i])) {
            if (isOnScreen(elementBound)) {
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
          let elementBound = element.getBoundingClientRect();
          if (onlyOnScreen) {
            if (isOnScreen(elementBound)) {
              element.classList.add(animationClassNames[i]);
            } else if (element.classList.contains(animationClassNames[i])) {
              element.classList.remove(animationClassNames[i]);
            }
          } else {
            if (!element.classList.contains(animationClassNames[i])) {
              if (isOnScreen(elementBound)) {
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
