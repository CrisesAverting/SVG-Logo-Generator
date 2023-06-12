class Shape {
    constructor() {
        this.color = "";
    }
    setColor(){
        this.shapeColor = color;
    }
}

class Triangle extends Shape {
    constructor() {
        super()
    }
    render(){
        return `<polygon point="150, 18 244, 182 56, 182" fill=${shapeColor}/>`
    }
}

class Circle extends Shape {
    constructor() {
        super()
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="green" fill=${shapeColor}/>`
    }

}

class Square extends Shape {
    constructor() {
        super()
    }
    render() {
        return `<rect width="100%" height="100%" fill="red" fill=${shapeColor}  />`
    }
}

module.exports = { Triangle, Circle, Square };