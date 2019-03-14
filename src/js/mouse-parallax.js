var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitCancelAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;

class MouseParallax {
    constructor(container, element, options) {
        this.container = (typeof container == 'string') ? document.querySelector(container) : container;
        this.element = (typeof element == 'string') ? document.querySelector(element) : element;
        this.containerRect = this.container.getBoundingClientRect();
        this.options = {
            maxMoveX:  this.containerRect.width,
            maxMoveY:  this.containerRect.height,
            direction: 'distance',
            returnMouseOutContainer: false,
            deep: 12,
            ...options,
        };
        this.centerElement = {
            x: this.element.offsetLeft + (this.element.offsetWidth / 2),
            y: this.element.offsetTop + (this.element.offsetHeight / 2)
        };
    }

    init = () => {
        this.container.addEventListener('mousemove', this.handlerMouseMove);

        (typeof this.options.onMouseOver == 'function') ? this.container.addEventListener('mouseover', this.onMouseOver) : null;
        (this.options.returnMouseOutContainer) ? this.setHandlerMouseOut() : null;
    }

    setHandlerMouseOut = () => {
        this.container.addEventListener('mouseout', this.handlerMouseOut);
    }

    handlerMouseMove = (e) => {
        var mousePos = this.getMousePos(e.clientX, e.clientY),
            distX = mousePos.x - this.centerElement.x,
            distY = mousePos.y - this.centerElement.y,
            multiplier = (this.options.direction == 'distance') ? -1 : 1;

        if (Math.abs(distX) < this.options.maxMoveX && Math.abs(distY) < this.options.maxMoveY) {
            requestAnimationFrame(() => {
                this.element.style.transform = 'translate('+(multiplier*distX)/this.options.deep + 'px,'+(multiplier*distY)/this.options.deep + 'px)';
                this.onMouseMove(e);
            });
        }
    }

    handlerMouseOut = (e) => {
        requestAnimationFrame(() => {
            this.element.style.transform = 'none';
            this.onMouseOut();
        });
    }

    getMousePos = (xRef, yRef) => {
        return {
            x: Math.floor(xRef - this.containerRect.left) / (this.containerRect.right - this.containerRect.left)*this.container.offsetWidth,
            y: Math.floor(yRef - this.containerRect.top) / (this.containerRect.bottom - this.containerRect.top)*this.container.offsetHeight
        }
    }

    /*
        hooks
    */
    onMouseOver = () => {
        (typeof this.options.onMouseOver == 'function') ? this.options.onMouseOver() : null;
    }

    onMouseMove = (e) => {
        (typeof this.options.onMouseMove == 'function') ? this.options.onMouseMove(e) : null;
    }

    onMouseOut = () => {
        (typeof this.options.onMouseOut == 'function') ? this.options.onMouseOut() : null;
    }
}

export default MouseParallax;