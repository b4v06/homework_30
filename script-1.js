class Weather {
    constructor(monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
        this.monday = monday;
        this.tuesday = tuesday;
        this.wednesday = wednesday;
        this.thursday = thursday;
        this.friday = friday;
        this.saturday = saturday;
        this.sunday = sunday;
    };
    temperatureAverage() {
        const temp = Number.parseInt((this.monday + this.tuesday + this.wednesday + this.thursday + this.friday + this.saturday + this.sunday) / 7);
        return temp;
    };
    temperatureMax() {
        let max = -100;
        for (let i in this) {
            if (this[i] > max) {
                max = this[i];
            }
        }
        return max;
    };
    temperatureMin() {
        let min = 100;
        for (let i in this) {
            if (this[i] < min) {
                min = this[i];
            }
        }
        return min;
    };
    print() {
        console.log("*****************");
        console.log("* Monday: * " + this.monday + " *");
        console.log("*****************");
        console.log("* Tuesday: * " + this.tuesday + " *");
        console.log("*****************");
        console.log("* Wednesday: * " + this.wednesday + " *");
        console.log("*****************");
        console.log("* Thursday: * " + this.thursday + " *");
        console.log("*****************");
        console.log("* Friday: * " + this.friday + " *");
        console.log("*****************");
        console.log("* Saturday: * " + this.saturday + " *");
        console.log("*****************");
        console.log("* Sunday: * " + this.sunday + " *");
        console.log("*****************");
        console.log("* Average: * " + this.temperatureAverage() + " *");
        console.log("*****************");
        console.log("* Max: * " + this.temperatureMax() + " *");
        console.log("*****************");
        console.log("* Min: * " + this.temperatureMin() + " *");
        console.log("*****************");
    }
}
const weather = new Weather(12, 13, 14, 9, 8, 10, 12);