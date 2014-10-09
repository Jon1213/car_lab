function Car(make, model, year, color){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.passengers = [];
}

Car.prototype.state = false; //false = off. because booleans are nicer on the memory than dual-state strings
Car.prototype.previous_owners = [];
Car.prototype.current_owner = "manufacturer";

Car.prototype.sale = function(newOwner){
	Car.prototype.previous_owners.push(Car.prototype.current_owner);
	Car.prototype.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.park = function(){
	if(Car.prototype.state === false){
		console.log("parked!!!111");
		return true;
	}
	return null;
};

Car.prototype.start = function(){
	Car.prototype.state = true;
};

Car.prototype.off = function(){
	Car.prototype.state = false;
};

Car.prototype.driveTo = function(destination){
	if(Car.prototype.state === true){
		console.log("I'ma drivin' to " + destination);
		return true;
	}
	return null;
};

Car.prototype.pickUp = function(name){
	if(Car.prototype.state === true){
		this.passengers.push(name);
		console.log("Pickin' " + name + " on up.");
		return true;
	}
	return null;
};

Car.prototype.dropOff = function(name){
	if( (Car.prototype.state === true) && (this.passengers.indexOf(name) !== -1) ){
		var seat = this.passengers.indexOf(name);
		this.passengers.splice(seat, 1);
		console.log("Droppin' " + name + " on off.");
		return true;
	}
	return null;
};

module.exports=Car;