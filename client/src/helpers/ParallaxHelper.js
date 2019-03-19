import Parallax from "parallax-js";
import TweenMax from "@tweenjs/tween.js";

export default class ParaHelper {
    constructor() {
        this.elements = [];
    }

    watch = () => {
        document.addEventListener('mousemove', this.watch, false);
    }

    enableParallax = (e, container, target, movement) => {
        const $this = document.getElementById(container);
        let relX = e.page - $this.offsetLeft();
        let relY = e.pageY = $this.offsetTop();

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });

    }


}