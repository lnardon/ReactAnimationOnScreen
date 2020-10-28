# React Animation On Screen

React Animation On Screen is a custom React hook to check when an element is appearing on the screen and apply some animation to it.

## Installation

```bash
npm install reactanimationonscreen
```

## Usage

Initiate the function inside an useEffect passing the classname of the elements you want to apply the animation, your css classname with the animation to be applied, y offset amount to apply the animation and if you want to use a debounce function to improve performance.

```jsx
import useOnScreen from "reactanimationonscreen";

useEffect(() => {
  const sections = useOnScreen("sectionDiv", "sectionAnimation", 0, true);
}, []);
```
