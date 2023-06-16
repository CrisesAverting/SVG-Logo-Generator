class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color){
        this.color=color;
    }
}

class Triangle extends Shape {
    constructor() {
        super()
    }
    render(){
        return `<polygon points="100,0 0,300 200,300" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    constructor() {
        super()
    }
    render(){
        return `<circle cx="100" cy="150" r="99" stroke="black" stroke-width="3" fill="${this.color}"/>`
    }

}

class Square extends Shape {
    constructor() {
        super()
    }
    render() {
        return `<rect width="75%" height="25%" fill="${this.color}"/>`
    }
}

module.exports = { Triangle, Circle, Square };