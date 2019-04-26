import lax from "lax.js";

export default class LaxHelper{
    constructor(){
       
  
    }

    init = () => {
        lax.setup();
       
    }
    addElement = (elem) => {
        lax.addElement(elem);
    }
    setUpScrollEvent = () => {
        document.addEventListener('scroll', function(x){
            lax.update(window.scrollY);
            console.log("Scroll-top", document.documentElement.scrollTop
            );
        }, false);

        window.addEventListener("resize", function() {
            lax.updateElements()
        });
        
    }

    handleLaxScrollUpdate = () => {
        lax.update(window.scrollY);
  
    }

    kill = () => {
        document.removeEventListener('scroll', this.setUpScrollEvent);
    }

  


}
