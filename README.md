A simple and easy to use vanilla javasript library to create mouse parallax without dependenсes.

# Browser support

**Desktop:**
* Chrome
* Safari
* Firefox
* IE 10+
* Opera

# Usage

- add markup

- import MouseParallax in your js file

```js 
import MouseParallax from './mouse-parallax';
```

## Initialization

```js
new MouseParallax(container, element, {
    /* your parameters */
}).init();
    scroller.init();
```

# Options

- ```maxMoveX``` :(default: container width) Defines the maximum number of pixels by which an element can move in X.

- ```maxMoveY```: (default: container height) Defines the maximum number of pixels by which an element can move in Y.

- ```direction```: (default: distance) Defines the direction of the offset element relative to the pointing device.

- ```returnMouseOutContainer```: (default: false) Defines whether return default element's position when a pointing device is moved off the container.

- ```deep```: (default: 12) The dependece of the movement of the element.

# Callbacks

- ```onMouseOver()```: Callback fired once when a pointing device is moved onto the container.

- ```onMouseMove(e)```: Callback fired when pointing device is moved while over an container. Gives mouse event.

- ```onMouseOut()```: Callback fired once when a pointing device is moved off the container.