# `<show-password>` Element

Web component for toggling visiblity of a password field

## Setup

### HTML

```html
<script src="path/to/@evanminto/show-password-element/browser.js">

<!-- Base styles -->
<link rel="stylesheet" src="path/to/@evanminto/show-password-element/base.css">

<!-- Overlay layout styles (optional) -->
<link rel="stylesheet" src="path/to/@evanminto/show-password-element/overlay-inline-end.css">
```

### ES Modules

You can also load the component directly in your JavaScript, which allows you to define your own custom name for the element.

```js
import ShowPasswordElement from '@evanminto/show-password-element';

customElement.define('custom-name', ShowPasswordElement);
```

## Usage

### Basic

```html
<show-password>
  <input type="password">
</show-password>
```

### Custom Toggle Button

```html
<show-password>
  <input type="password">
  <button slot="toggle">Show</button>
</show-password>
```

## Attributes

### visible

Represents whether the password text is currently visible. Adding or removing it will change the visibility, and changes caused by other mechanisms (such as the user clicking the toggle) will be reflected in the attribute.

## Properties

### visible

Read-write boolean property representing the same value as the `visible` attribute.

## Events

### show-password-toggle

Fired on the `<show-password>` element when the visibility has been toggled