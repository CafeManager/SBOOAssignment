class Vehicle{

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return "Beep."
    }

    toString(){
        return `The vehicle is a ${make} ${model} from ${year}`
    }

}

class Car extends Vehicle{

    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;

    }
}

class Motorcycle extends Vehicle{

    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOM!!!"
    }
}

class Garage{

    constructor(capacity){

        this.vehicles = [];
        this.capacity = capacity
        

    }

    add(vehicle){
        if(!(vehicle.__proto__.__proto__ == Vehicle.prototype)){
            return "Only vehicles are allowed in here!"
        }
        if(this.vehicles.length<this.capacity){
            this.vehicles.push(vehicle)
        }
        else{
            return "Sorry, we’re full."
        }
    }
}

let garage = new Garage(2);
garage.vehicles; // []
garage.add(new Car("Hyundai", "Elantra", 2015)); // "Vehicle added!"
garage.vehicles; // [Car]
garage.add("Taco"); // "Only vehicles are allowed in here!"

garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// "Vehicle added!"
garage.vehicles; // [Car, Motorcycle]

garage.add(new Motorcycle("Honda", "Nighthawk", 2001));
// "Sorry, we're full."