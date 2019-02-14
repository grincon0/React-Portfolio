import { CanvasSpace, Num,Rectangle,  Pt, Group } from "pts";


export default class SpecialEffect {
    //Space provides the paper, Form provides the pencil, and Point provides the idea

    initializeCanvas = (type) => {
        const space = new CanvasSpace("#canvas");
        space.setup({ bgcolor: "#e2097d" });
        this.initializeForm(space, type);

    }
    initializeForm = (space, type) => {
        const form = space.getForm();
        this.createTestPoint(space, form, type);

    }
    createTestPoint = (space, form, type) => {

        space.play().bindMouse().bindTouch();

        if(type === "poly"){
            this.createPolyAnimation(space, form);
        }else{
            this.createPointAnimation(space, form);
        }
        

    }
    createPointAnimation = (space, form) => {
        space.add((time, ftime) => {
            let radius = Num.cycle((time % 1000) / 1000) * 20;
            form.fill("#09f").point(space.pointer, radius, "circle");
        });

    }
    createPolyAnimation = (space, form) => {

        space.add((time, ftime) => {
            let rect = Rectangle.fromCenter(space.center, space.size.$divide(2));
            let poly = Rectangle.corners(rect);
            poly.shear2D(Num.cycle(time % 5000 / 5000) - 0.5, space.center);
    
            form.fillOnly("#123").polygon(poly);
            form.strokeOnly("#fff", 3).rect(rect);
        });

    }

}