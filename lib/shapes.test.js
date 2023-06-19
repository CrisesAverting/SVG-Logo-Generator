const { Triangle, Circle, Square} = require("./shapes");

describe("Triangle", ()=> {
    it("should return a solid red triangle",() => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual(
        `<polygon points="100,0 0,300 200,300" fill="red"/>`
        );
    });
});
describe("Circle", ()=> {
    it("should return a solid blue circle",() => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            `<circle cx="100" cy="150" r="99" stroke="black" stroke-width="3" fill="blue"/>`
        );
    });
});
describe("Square", ()=> {
    it("should return a solid black Square",() => {
        const shape = new Square();
        shape.setColor("black");
        expect(shape.render()).toEqual(
            `<rect width="75%" height="25%" fill="black"/>`
        );
    });
});

