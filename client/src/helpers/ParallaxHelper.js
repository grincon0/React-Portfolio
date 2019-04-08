
import Parallax from "parallax-js";
import TweenMax from "gsap";

export default class ParallaxHelper {
    constructor(){
        this.watch = this.watch.bind(this);
    }
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
        document.addEventListener('mousemove', this.boundWatch);
        
    }
    boundWatch = (e) => {
        this.enableSet(e);
    }
    enableSet = (e) =>{
            this.enableParallax(e,"parallax-container", ".parallax-img-1", -50);
            this.enableParallax(e,"parallax-container", ".parallax-img-2", -20);
            this.enableParallax(e,"parallax-container", ".parallax-img-3", -40);
            this.enableParallax(e,"parallax-container", ".parallax-img-4", -30);
            this.enableParallax(e,"parallax-container", ".parallax-img-5", -100);
            this.enableParallax(e,"parallax-container", ".parallax-img-6", -25);
            this.enableParallax(e,"parallax-container", ".parallax-img-7", -80);
            this.enableParallax(e,"parallax-container", ".parallax-img-8", -20);
            this.enableParallax(e,"parallax-container", ".parallax-img-9", -35);
            this.enableParallax(e,"parallax-container", ".parallax-img-10", 33);
    }
    kill = () =>{
        document.removeEventListener('mousemove', this.boundWatch);
    }
}


