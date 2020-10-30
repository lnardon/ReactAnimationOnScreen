# React Animation On Screen

React Animation On Screen is a custom React hook to check when an element is appearing on the screen and apply some animation to it.

## Installation

```bash
npm install reactanimationonscreen
```

## Usage

Initiate the function inside an useEffect passing an array of classnames you want to apply the animation, an array of css classes with the animations to be applied, the y offset amount to apply the animation and if you want to use a debounce function to improve performance.

```tsx
import useOnScreen from "reactanimationonscreen";

useEffect(() => {
  const sections = useOnScreen(targetClassNames: string[], animationClassNames: string[], yOffset : number(optional), useDebounce:boolean(optional));
}, []);
```

## Example

```jsx
import useOnScreen from "reactanimationonscreen";

useEffect(() => {
  const sections = useOnScreen(
    ["subtitle", "paragraph"],
    ["subtitleAnimation", "paragraphAnimation"],
    0,
    true
  );
}, []);
```

Any contribuition is Welcome! <br/>
MIT Lnardon 2020
