

class Point{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}

	getX(){
		return this.x;
	}

	getY(){
		return this.y;
	}

	setX(x){
		this.x = x;
	}

	setY(y){

		this.y = y;
	}

	toString(){
		return `Point (${this.x}, ${this.y})`;
	}
}
module.exports = Point;

p1 = new Point(10, 50);
console.log(p1.toString());
p1.setX(20);
console.log(p1.toString());
p1.setY(20);
console.log(p1.toString());
