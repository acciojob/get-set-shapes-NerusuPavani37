//complete this co
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
    return this.width * this.height
  }
}

class Square extends Rectangle {
  constructor(side){
    super(side,side);
  }
  
  getPerimeter(){
   return 4 * this.width;
  }
  
}

let rectangle = new Rectangle(5,10);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.getArea());

let square = new Square(7);
console.log(square.width);
console.log(square.height);
console.log(square.getArea());
console.log(square.getPerimeter());

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
