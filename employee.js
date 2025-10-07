let employees = [
  { name: "Abdul", salary: 25000 },
  { name: "Mehran", salary: 40000 },
  { name: "Salif", salary: 55000 },
];
let employeesUpdated = employees.map((emp) => ({
  name: emp.name,
  salary: emp.salary + 2000,
}));
console.log("Updated Salaries:", employeesUpdated);
