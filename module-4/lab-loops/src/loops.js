let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "max@example.com",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "raja@example.com",
  },
];

let choice;

do {
  choice = prompt(
    "Choose an action:\n" +
      "first - show first contact\n" +
      "last - show last contact\n" +
      "all - show all contacts\n" +
      "new - add new contact\n" +
      "quit - exit",
  );

  if (choice === "first") {
    console.log(contacts[0]);
  } else if (choice === "last") {
    console.log(contacts[contacts.length - 1]);
  } else if (choice === "all") {
    for (let contact of contacts) {
      console.log(contact);
    }
  } else if (choice === "new") {
    let name = prompt("Enter name:");
    let phone = prompt("Enter phone:");
    let email = prompt("Enter email:");

    contacts.push({ name, phone, email });
  }
} while (choice !== "quit");
