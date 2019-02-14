import { CanvasSpace, Pt, Group } from "pts";


export default class SpecialEffect{

    initializeCanvas = () => {
        const space = new CanvasSpace("#canvas");
        space.setup({ bgcolor: "#fff"});
        this.initializeForm(space);

    }
    initializeForm = (space) => {
        const form = space.getForm();
        this.createTestPoint(space, form);

    }
    createTestPoint = (space, form) => {
        space.add( () => form.point( space.pointer, 10));

    }
}