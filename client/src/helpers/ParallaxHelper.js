import Parallax from "parallax-js";
import TweenMax from "@tweenjs/tween.js";

export default class ParaHelper {
    constructor() {
        this.elements = [];
    }
    watch = () => {
        document.addEventListener('mousemove', (e) => {
            this.enableParallax(e,"#parallax-container", ".parallax-img", -50);
        });
    }
    test = () => {
        console.log('testing');
    }

    enableParallax = (e, container, target, movement) => {
        let $this = document.getElementById(container);
        let relX = e.page - $this.offsetLeft;
        let relY = e.pageY = $this.offsetTop;

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });

    }


}