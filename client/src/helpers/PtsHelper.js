import { CanvasSpace, Num, Rectangle, Line, Tempo, Const, Pt, Group } from "pts";


export default class SpecialEffect {
    //Space provides the paper, Form provides the pencil, and Point provides the idea
    constructor() {
        this.points = [];
        this.lines = [];
        this.colors = ["#fe0000","#fdfe02", "#0bff01", "#011efe", "#fe00f6"];

    }

    initializeCanvas = (type) => {
        const space = new CanvasSpace("#canvas");
        space.setup({ bgcolor: "#000000" });
        this.initializeForm(space, type);

    }
    initializeForm = (space, type) => {
        const form = space.getForm();
        this.createTestPoint(space, form, type);

    }
    createTestPoint = (space, form, type) => {

        space.play().bindMouse().bindTouch();

        if (type === "poly") {
            this.createPolyAnimation(space, form);
        } else if (type === "line") {
            this.createPoints(space, form);
        }
        else {
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
    createPoints = (space, form) => {
        while (this.points.length <= 100) {
            let temp = {};
            temp["x"] = this.getRandomX();
            temp["y"] = this.getRandomY();
            temp["color"] = this.colors[Math.floor(Math.random() * 5)];
            this.points.push(temp);

        }
        this.createVectors(space, form)
    }
    getRandomY = () => {
        return Math.floor(Math.random() * 700) + 50;
    }
    getRandomX = () => {
        return Math.floor(Math.random() * 3000) + 1000;
    }
    createVectors = (space, form) => {
        space.add((time, ftime) => {
            let cycle = (off) => space.center.x * (Num.cycle((time + off) % 9000 / 9000) * 2);

            for(let i = 0; i < this.points.length; i++){
                let tempPoint = new Pt(cycle(this.points[i].x), this.points[i].y);
                form
                .strokeOnly(this.points[i].color, 10, "round", "round")
                .line(Line.fromAngle(tempPoint, 0, 20));
            }

        });
    }

}