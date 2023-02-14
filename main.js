let age = parseInt(prompt("Enter your age: "));
let sex = prompt("Enter your sex (M/F): ").toUpperCase();

if (sex === "F") {
  console.log("You will work in urban areas only.");
} else if (sex === "M" && age >= 20 && age < 40) {
  console.log("You may work anywhere.");
} else if (sex === "M" && age >= 40 && age <= 60) {
  console.log("You will work in urban areas only.");
} else {
  console.log("ERROR");
}