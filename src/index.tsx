import React from "react";

const OnScreenComponent: React.FC = ({ children }) => {
  function isOnScreen(component: any) {
    let bounding = component.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  return <div className="">{children}</div>;
};

export default OnScreenComponent;
