let names = [
  ["Olivia", "Emma", "Mia", "Sofia"],
  ["William", "James", "Daniel"],
];

console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[0][1]);
console.log(names[1][1]);

let users = [
  {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us",
  },
  {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com",
  },
];

console.log(users[0].name);
console.log(users[1].email);

users[2] = {
  name: "Irene",
  surname: "Purnell",
  age: 32,
  email: "IreneHPurnell@rhyta.com",
};

console.log(users[2].surname);

//length
console.log(names.length);
console.log(names[0].length);
console.log(names[1].length);

//indexOf
let names1 = ["Olivia", "Emma", "Mateo", "Samuel"];
console.log(names1.indexOf("Mateo"));
console.log(names1.indexOf("Samuel"));

//push
names1.push("Amelia");
console.log(names1);

//unshift
names1.unshift("Kevin");
console.log(names1);

//pop
names1.pop("Amelia");
console.log(names1);

//shift
names1.shift();
console.log(names1);

//reverse
names1.reverse();
console.log(names1);

//slice
names1.reverse();
let n1 = names1.slice(2);
console.log(n1);

let n2 = names1.slice(0, -2);
console.log(n2);

//concat
let otherNames = ["William", "Jane"];
let allNames = names1.concat(otherNames);

console.log(names1);
console.log(otherNames);
console.log(allNames);
