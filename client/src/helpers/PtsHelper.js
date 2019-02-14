import { CanvasSpace, Pt, Group } from "pts";


export default class SpecialEffect{


    initializeCanvas = () => {
        const space = new CanvasSpace("#canvas");
        space.setup({ bgcolor: "#e2097d"});
        this.initializeForm(space);

    }
    initializeForm = (space) => {
        let form = space.getForm();
        //space._hasMouse = true;
        space.add( () => form.point( space.pointer, 10 ) );
        space.play().bindMouse().bindTouch();
        console.log(space);
        //this.createTestPoint(space, form);

    }
    createTestPoint = (space, form) => {
        space.add( () => form.point( space.pointer, 10 ) );

    }

}