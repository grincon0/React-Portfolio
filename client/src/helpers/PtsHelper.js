import { CanvasSpace, Num, Pt, Group } from "pts";


export default class SpecialEffect{

    initializeCanvas = () => {
        const space = new CanvasSpace("#canvas");
        space.setup({ bgcolor: "#e2097d"});
        this.initializeForm(space);

    }
    initializeForm = (space) => {
        const form = space.getForm();
        this.createTestPoint(space, form);

    }
    createTestPoint = (space, form) => {
        //space.add( () => form.point( space.pointer, 10 ) );
        space.play().bindMouse().bindTouch();
        this.createPointAnimation(space, form);

    }
    createPointAnimation = (space, form) => {
        space.add( (time, ftime) => {
            let radius = Num.cycle( (time%1000)/1000 ) * 20;
            form.fill("#09f").point( space.pointer, radius, "circle" );
          });
    }

}