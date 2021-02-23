
class Hippopotamus{
	constructor(name, weight, tusksSize){
		this.name = name;
		this.weight = weight;
		this.tusksSize = tusksSize;
	}

	swim(){
		if (this.weight > 0.300){
			this.weight -= 0.300;
		}
	}

	eat(){
		this.weight += 1;
	}

	getTusksSize(){
		return this.tusksSize;
	}

	getName(){
		return this.name;
	}

	fight(hippo2){
		//console.log(this.tusksSize);
		//console.log(hippo2.getTusksSize());

		if (this.tusksSize > hippo2.getTusksSize()){
			return `The winner is ${this.name}`;
		}

		else if (this.tusksSize < hippo2.getTusksSize() ){
			return `The winner is ${hippo2.name}`;
		}

		else{
			return `There is no winner, tusksSize are equal`
		}
	}

	toString(){
		return `${this.name} is a hippo of ${this.weight} kg, and has tusks of ${this.tusksSize} cm `;
	}

}


hippo1 = new Hippopotamus("Gloria", 1200, 40);
hippo2 = new Hippopotamus("MotoMoto", 1100, 60);


console.log(hippo1.fight(hippo2));
console.log(hippo1.toString());
console.log(hippo2.toString());

// Cycle de vie
numberOfDays = 21;
numberOfLifeHours = 15;

console.log(` At the end of Day n° 0 : ${hippo1.toString()} \n` );

for( let day=0; day<numberOfDays; day++){
	for( let hour=0; hour<numberOfLifeHours; hour++)
	{
		hippo1.eat();
		hippo1.eat();
		hippo1.swim();
		hippo1.swim();
		hippo1.swim();

	}
	console.log(` At the end of Day n° ${day+1} : ${hippo1.toString()} \n` );
}





