let name = "   Dell   ";
console.log(name);
console.log(name.length);

let trimmedName = name.trim();
console.log(trimmedName);
console.log(trimmedName.length);

console.log(trimmedName.toUpperCase());
console.log(trimmedName.toLowerCase());
// let str = trimmedName.toLowerCase();
// console.log(str);
console.log(trimmedName.indexOf("D"));

let courseTitle = "Graphic Design With Adobe Tools ";
let newCourseTitle = courseTitle.replace("Adobe Tools", "Canva");
console.log(newCourseTitle);

let position = courseTitle.indexOf("Adobe Tools");
console.log(position);

let coursePart = courseTitle.substring(8, 15);
console.log(coursePart);
console.log(courseTitle.charAt(15));

let firstName = "Mustafa";
let lastName = "Lowna";
let fullName = firstName.concat("-", lastName);
console.log(fullName);

let topics = "Illustrator, Photoshop, CorelDraw";
let topicsArray = topics.split(",");
console.log(topicsArray);

let course2 = "Graphic Design With Canva";
console.log(course2.includes("With"));
