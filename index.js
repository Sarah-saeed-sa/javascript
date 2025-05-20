function Rectangle(w, h) {
  this.width = w || 200, this.height = h || 300;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};
Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};
Rectangle.prototype.displayinfo = function () {
  console.log("width = " + this.width);
  console.log("height = " + this.height);
  console.log("area = " + this.area());
  console.log("preimeter = " + this.perimeter());
};
var rec1 = new Rectangle(200, 300);
var rec2 = new Rectangle(300, 400);
rec1.displayinfo();
rec2.displayinfo();
