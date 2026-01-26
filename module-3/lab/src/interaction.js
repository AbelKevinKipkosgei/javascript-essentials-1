let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

// write your code here
const userName = prompt("Enter name: ", "John Doe");
const userPhone = prompt("Enter phone: ", "0800 1111");
const userEmail = prompt("Enter email: ", "johndoe@gmail.com");

const contactObj = { name: userName, phone: userPhone, email: userEmail };
contacts.push(contactObj);

let last = contacts.length - 1;

console.log(
  `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`,
);
console.log(
  `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`,
);
console.log(`Contacts: ${contacts}`);
