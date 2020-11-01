# React Animation On Screen

React Animation On Screen is a custom React hook to check when an element is appearing on the screen and apply some animation to it.

[![NPM](https://img.shields.io/npm/v/reactanimationonscreen.svg)](https://www.npmjs.com/package/reactanimationonscreen) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install reactanimationonscreen
```

## Usage

Initiate the function inside an useEffect passing an array of classnames you want to apply the animation, an array of css classes with the animations to be applied and the y offset amount to apply the animation.

```tsx
import useOnScreen from "reactanimationonscreen";

useEffect(() => {
  const sections = useOnScreen(targetClassNames: string[], animationClassNames: string[], yOffset : number(optional));
}, []);
```

## Example

```jsx
import useOnScreen from "reactanimationonscreen";

useEffect(() => {
  const sections = useOnScreen(
    ["subtitle", "paragraph"],
    ["subtitleAnimation", "paragraphAnimation"],
    0
  );
}, []);
```

Any contribuition is Welcome! <br/>
MIT Lnardon 2020
