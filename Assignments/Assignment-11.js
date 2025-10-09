let courses = [
  { title: "Full Stack", duration: "6 Month", price: 18000 },
  { title: "Data Science", duration: "5 Month", price: 20000 },
  { title: "AWS Cloud", duration: "3 Months", price: 15000 },
  { title: "UI/UX Design", duration: "4 Months", price: 16000 },
];

let updatedCourses = courses.map((course) => ({
  title: course.title,
  duration: course.duration,
  price: course.price - 2000,
}));
console.log("Updated Course Prices:", updatedCourses);
