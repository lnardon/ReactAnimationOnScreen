function debounce(func: any, wait: number, immediate: boolean) {
  var timeout: null;
  return function () {
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
  offset: number
) {
  window.onload = () => {
    let elements = [...document.getElementsByClassName(className)];
    window.onscroll = (e) => {
      debounce(
        (() => {
          elements.forEach((element) => {
            console.log(
              element.getBoundingClientRect().top,
              window.innerHeight
            );
            if (
              element.getBoundingClientRect().top <
              window.innerHeight - offset
            ) {
              element.classList.add(classNameAnimation);
            }
          });
        })(),
        500,
        false
      );
    };
  };
}

export default useOnScreen;
