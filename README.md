# React Animation On Screen

React Animation On Screen is a custom React hook to check when an element is appearing on the screen and apply some animation to it.

[![NPM](https://img.shields.io/npm/v/reactanimationonscreen.svg)](https://www.npmjs.com/package/reactanimationonscreen) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install reactanimationonscreen
```

## Usage

Initiate the function inside an useEffect passing an array of classnames you want to apply the animation, an array of css classes with the animations to be applied.

```ts
import useOnScreen from "reactanimationonscreen";

useEffect(() => {
  const sections = useOnScreen(targetClassNames: string[], animationClassNames: string[]);
}, []);
```

## Example

```jsx
import useOnScreen from "reactanimationonscreen";

useEffect(() => {
  const sections = useOnScreen(
    ["subtitle", "paragraph"],
    ["subtitleAnimation", "paragraphAnimation"]
  );
}, []);
```

## Extra Feature

By default the animation is applied when the target starts to appear on the bottom of the screen but if you want the animation to be applied later you can pass a third argument to the function call.

The example below only applies the animation when the target is 250px above the bottom of the screen.

```jsx
import useOnScreen from "reactanimationonscreen";

useEffect(() => {
  const sections = useOnScreen(["title"], ["titleAnimation"], 250);
}, []);
```

MIT Lnardon 2020
