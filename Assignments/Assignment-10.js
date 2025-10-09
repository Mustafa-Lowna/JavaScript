class Course {
  title;
  duration;
  fee;
  description;

  constructor(title, duration, fee, description) {
    this.title = title;
    this.duration = duration;
    this.fee = fee;
    this.description = description;
  }
  displayDetails() {
    console.log(
      `Course Details => ${this.title}, ${this.duration}, ${this.fee}, ${this.description},`
    );
  }
  applyDiscount(percent) {
    let discount = (this.fee * percent) / 100;
    this.fee = this.fee - discount;
    console.log(
      `Applied Discount of ${percent}% on ${this.title} course. Discounted fee = Rs ${this.fee}/-`
    );
  }
}
let course = new Course(
  "Canva",
  "60 Days",
  7000,
  " Canva Basic To Advnaced In Just 60 Days"
);
course.displayDetails();
course.applyDiscount(15);

console.log();

let course2 = new Course(
  "Web Design",
  "50 Days",
  12000,
  "Advnaced Web Design In Just 50 Days"
);
course2.displayDetails();
course2.applyDiscount(20);
