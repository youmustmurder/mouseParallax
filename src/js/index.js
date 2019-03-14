import MouseParallax from './mouse-parallax';

window.onload = () => {
    new MouseParallax('.mouse-parallax', '.mouse-parallax__item', {

    }).init();
}