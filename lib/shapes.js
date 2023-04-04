
class Shapes {
    constructor(shapeColor) {
      this.shapeColor = color;
    }
    render() {
      throw new Error('Not implemented');
    }
    setColor(color) {
        this.color = color;
    }
  }
  class Circle extends Shapes {
    constructor(color) {
      super(color);
    }
  
    render() {
        let shape = "circle cx=\"150\" cy=\"100\" r=\"90\"";

      return `<${shape} fill="${this.color}"/>`;
    }
  }
  class Square extends Shapes {
    constructor(color) {
      super(color);
    }
  
    render() {
        let shape = "rect x=\"50\" y=\"0\" width=\"200\" height=\"200\"";

        `<${shape} fill="${this.color}"/>`;
    }
  }
  class Triangle extends Shapes {
    constructor(color) {
      super(color);
    }
  
    render() {
        let shape = "polygon points=\"150, 18 244, 182 56, 182\"";
        return `<${shape} fill="${this.color}"/>`;
    }
  }

  module.exports = { Shapes, Circle, Square, Triangle };
