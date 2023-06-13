class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color){
        this.color = color;
    }
}

class Triangle extends Shape {
    constructor() {
        super()
    }
    render(){
        return `<polygon points="100,0 0,300 200,300" style="fill:`
    }
}

class Circle extends Shape {
    constructor() {
        super()
    }
    render(){
        return `<circle cx="100" cy="150" r="99" stroke="black" stroke-width="3" fill="`
    }

}

class Square extends Shape {
    constructor() {
        super()
    }
    render() {
        return `<rect width="100%" height="100%" fill="`
    }
}

module.exports = { Triangle, Circle, Square };