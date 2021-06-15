class Car {
    constructor(brand) {
        this.brand = brand; // this = pekar pa sig sjalv.
    }

    toDiv() {
        return `<div>${this.brand}</div>`
    }
}

const myCar = new Car("Volvo");
console.log(myCar.toDiv());