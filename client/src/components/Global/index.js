
const GlobalStates = {
   /*  constructor(){
      
    } , */
    slider : false,
    colorA : "",
    colorB : "",
    parallax : {
        init: false,
        type: ""
    },
    setAnimate : function (boolean) {
        return GlobalStates.slider = boolean;
    } ,
    setColors : function(stringA, stringB) {
        return(
            GlobalStates.colorA = stringA,
            GlobalStates.colorB = stringB
        );
    }
    
}

export default GlobalStates;
