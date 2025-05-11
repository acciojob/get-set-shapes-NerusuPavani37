//complete this code
class Rectangle {
  constructor(width, height){
    this._width = width;
    this._height = height;
  }
  get width(){
    return this._width;
  }
  
  get height(){
    return this._height;
  }
  
  getArea(){
    console.log(this.width * this.height);
  }
}

class Square extends Rectangle {
  constructor(side){
    super(side,side);
  }
  
  getPerimeter(){
    console.log(4 * this.width);
  }
  
}

let rectangle = new Rectangle(5,10);
console.log(rectangle.width);
console.log(rectangle.height);
rectangle.getArea();

let square = new Square(7);
console.log(square.width);
console.log(square.height);
square.getArea();
square.getPerimeter();

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
