const Point = require('./exo2.js');

class Cercle{
	constructor(center, radius){
		this.center = center;
		this.radius = radius;
	}

	area(){
		return Math.PI * Math.pow(this.radius, 2);
	}

	containsPoint(p){
		return Math.pow((p.getX() - this.center.getX()), 2) + Math.pow((p.getY() - this.center.getY()), 2) <= Math.pow(this.radius, 2);
	}

	toString(){
		return `Circle  centered in ${this.center.toString()} with a radius of ${this.radius}`;
	}

}

centre1 = new Point(5, 5);
cercle1 = new Cercle(centre1, 5);
console.log(cercle1.toString());


cercle2 = new Cercle( new Point(3, 3), 3);
console.log(cercle2.toString());
