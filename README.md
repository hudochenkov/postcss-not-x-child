# PostCSS :not-X-child [![Build Status][ci-img]][ci]

[PostCSS] plugin transform `:not-first-child` and `:not-last-child` to `:not(:first-child)` and `:not(:last-child)`.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/hudochenkov/postcss-not-x-child.svg
[ci]:      https://travis-ci.org/hudochenkov/postcss-not-x-child

Input:

```css
div:not-first-child {
}
div:not-last-child {
}
```

Output:

```css
div:not(:first-child) {
}
div:not(:last-child) {
}
```

## Usage

```js
postcss([ require('postcss-not-x-child') ])
```

See [PostCSS] docs for examples for your environment.
