class Shapes {
    constructor(color) {
      this.color = color;
    }
    render() {
      throw new Error('implement correct method');
    }
    setColor(color) {
        this.color = color;
    }
  }
  
  class Square extends Shapes {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<rect x="75" y="35" width="150" height="150" fill="${this.color}"/>`;
    }
  }

  class Circle extends Shapes {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<circle cx="150" cy="100" r="90" fill="${this.color}"/>`;
    }
  }

  class Triangle extends Shapes {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`;
    }
  }

  module.exports = { Shapes, Square, Triangle, Circle };
