# `<show-password>` Element

Web component for toggling visiblity of a password field

## Setup

### HTML

```html
<script src="path/to/@evanminto/show-password-element/dist/browser.js">

<!-- Base styles -->
<link rel="stylesheet" src="path/to/@evanminto/show-password-element/dist/base.css">

<!-- Overlay layout styles (optional) -->
<link rel="stylesheet" src="path/to/@evanminto/show-password-element/dist/overlay-inline-end.css">
```

### ES Modules

You can also load the component directly in your JavaScript, which allows you to define your own custom name for the element or control the timing of module loading and custom element definition.

```js
import { ShowPasswordElement } from '@evanminto/show-password-element';

customElement.define('show-password-element', ShowPasswordElement);
```

## Usage

### Basic

```html
<show-password>
  <input type="password">
</show-password>
```

### Specify Exact Input

```html
<show-password>
  <input type="text">
  <!-- Specify this password and ignore the text input -->
  <input type="password" data-behavior="input">
</show-password>
```

### Custom Toggle Label and Styles

```html
<show-password>
  <input type="password">
  <span slot="toggle-content">Show PW</span>
</show-password>

<style>
  show-password::part(toggle) {
    color: red;
  }

  show-password::part(toggle-pressed) {
    color: darkred;
  }
</style>
```

### Custom Toggle Button

```html
<show-password>
  <input type="password">
  <button slot="toggle" data-behavior="toggle">Show</button>
</show-password>
```

### Two Custom Buttons

```html
<show-password>
  <input type="password">

  <div slot="toggle">
    <button data-behavior="show">Show</button>
    <button data-behavior="hide">Hide</button>
  </div>
</show-password>
```

## Attributes

### visible

Represents whether the password text is currently visible. Adding or removing it will change the visibility, and changes caused by other mechanisms (such as the user clicking the toggle) will be reflected in the attribute.

## Properties

### visible

Read-write boolean property representing the same value as the `visible` attribute. There is no `toggle()` method, but you can easily do the following to perform a toggle in JavaScript:

```js
showPassword.visible = !showPassword.visible;
```

## Events

### show-password-toggle

Fired on the `<show-password>` element when the visibility has been toggled. If
canceled, the toggle will not occur.

## Behaviors

Behaviors can be assigned to descendants of `<show-password>` using the
`data-behavior` attribute, enabling you to bring your own markup and hook it up
to the element’s built-in behaviors.

### toggle

When clicked, toggles `visible` on and off. The toggle element will also have
its `aria-pressed` attribute toggled between `true` and `false` to reflect the
current state for assistive technology.

### show

When clicked, sets `visible` to `true`.

### hide

When clicked, sets `visible` to `false`.