class car {
  brand;
  model;
  year;

  constructor(br, mo, yr) {
    this.brand = br;
    this.model = mo;
    this.year = yr;
  }
  displayDetails() {
    console.log(`This car is a ${this.brand} ${this.model} ${this.year}.`);
  }
}

let myCar = new car("Suzuki", "Fronx", "2025");

myCar.displayDetails();

let car2 = new car("Toyota", "Fortuner", "2025");
car2.displayDetails();
