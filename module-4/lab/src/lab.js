// contacts management
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

// get user input action
const actionInput = prompt(
  "What would you like to do? \n(first) -> show the first contact \n(last) -> show the last contact \n(new) -> add a new contact",
);

const userAction = actionInput?.toLowerCase().trim();

// get last contact
const last = contacts.length - 1;

switch (userAction) {
  case "first":
    const firstContact = contacts[0];
    alert(
      `<--First Contact--> \nName: ${firstContact.name} \nPhone: ${firstContact.phone} \nEmail: ${firstContact.email}`,
    );
    break;
  case "last":
    const last = contacts.length - 1;
    alert(
      `<--Last Contact--> \nName: ${contacts[last].name} \nPhone: ${contacts[last].phone} \nEmail: ${contacts[last].email}`,
    );
    break;
  case "new":
    // add new contact
    const userName = prompt("Enter name: ", "John Doe");
    const userPhone = prompt("Enter phone: ", "0800 1111");
    const userEmail = prompt("Enter email: ", "johndoe@gmail.com");

    if (!userName || !userPhone || !userEmail) {
      alert("Missing contact info!!");
    } else {
      const contactObj = { name: userName, phone: userPhone, email: userEmail };
      contacts.push(contactObj);
    }
    break;
  default:
    alert("Invalid operation!!");
}

// fetch last contact
const lastIndex = contacts.length - 1;

// display on console
console.log(
  `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`,
);
console.log(
  `${contacts[lastIndex].name} / ${contacts[lastIndex].phone} / ${contacts[lastIndex].email}`,
);
