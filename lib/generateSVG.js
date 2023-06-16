const { Triangle, Circle, Square } = require("./shapes.js");

function generateSVG(specs) {
    selectedShape = specs.logo_shape;
    //   console.log(specs.logo_text)
    switch (selectedShape) {
        case "Triangle":
            console.log("Triangle");
            var logoShape = new Triangle();
            logoShape.setColor(specs.shape_color)
            break;
        case "Circle":
            // console.log("Circle");
            var logoShape = new Circle();
            logoShape.setColor(specs.shape_color)
            break;
        case "Square":
            var logoShape = new Square();
            logoShape.setColor(specs.shape_color)
            // console.log("Square");
        default:
            console.log("Pick a shape");
    }

    return (
        `<svg version="1.1" width="200" height="300" xmlns="http://www.w3.org/2000/svg">

          ${logoShape.render()}

           <text x="90" y="150" font-size="30" fill="${specs.logo_text_color}">${specs.logo_text}</text>

        </svg>`
    );
} 

module.exports = generateSVG;