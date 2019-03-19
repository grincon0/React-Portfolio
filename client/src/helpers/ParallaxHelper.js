
import Parallax from "parallax-js";
import TweenMax from "gsap";

export default class ParallaxHelper {

    enableParallax = (e, container, target, movement) => {
        let cont = document.getElementById(container);
        let relX = e.clientX - cont.offsetLeft;
        let relY = e.clientY - cont.offsetTop;

        TweenMax.to(target, 1, {
            x: (relX - 1200 / 2) / 1200 * movement,
            y: (relY - 500 / 2) / 500 * movement
        });
    }
    watch = () => {
        document.addEventListener('mousemove', (e) => {
            this.enableParallax(e,"parallax-container", ".parallax-img", -100);
        });
    }
    
}
