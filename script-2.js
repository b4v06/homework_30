class Vehicle {
    start() {
        console.log("Ah, damn, here we go again");
    }
    stop() {
        console.log("Ah, damn, here we stop again");
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log("Engine starts working");
    };
    stopEngine() {
        console.log("Engine stops running");
    };
}
class Bike extends Vehicle {
    ringBell() {
        console.log("Jingle, jingle");
    };
    doWheelie() {
        console.log("Damn, you are so cool!");
    };
}
class electricBike extends Bike {
    start() {
        console.log("Now it doesn't start");
    };
    stop() {
        console.log("Now it doesn't stop");
    };
    recharge() {
        console.log("Your electric bike has been recharged!");
    };
    brag() {
        console.log("You've bragged about how cool your electric bike is!");
    };
}
class BmxBike extends Bike {
    start() {
        console.log("Now it doesn't start");
    };
    stop() {
        console.log("Now it doesn't stop");
    };
    doFlip() {
        console.log("DO A FLIP!");
    };
    do360() {
        console.log("Damn, you've failed miserably!");
    };
}
class SportsCar extends Car {
    start() {
        console.log("Now it doesn't start");
    };
    stop() {
        console.log("Now it doesn't stop");
    };
    goFast() {
        console.log("You ride faster, than before (not really)");
    };
    goToAutoRepairShop() {
        console.log("Repairing those sports cars costs a fortune! Now you are broke!");
    };
}
class Truck extends Car {
    start() {
        console.log("Now it doesn't start");
    };
    stop() {
        console.log("Now it doesn't stop");
    };
    bigCar() {
        console.log("This is a big car!");
    };
    veryBigCar() {
        console.log("I mean this is a really big car!");
    };
}
const example = new Truck();
const example2 = new BmxBike();