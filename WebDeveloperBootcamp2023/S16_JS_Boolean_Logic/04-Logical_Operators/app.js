// =====================
// LOGICAL AND OPERATOR
// =====================
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("VALID PASSWORD!");
} else {
  console.log("INCORRECT FORMAT FOR PASSWORD!");
}

// =====================
// REVISITING AGE EXAMPLE
// =====================

// 0-5 free
// 5-10 $10
// 10-65 $20
// 65+ free

const age1 = 100;
if ((age1 >= 0 && age1 < 5) || age1 >= 65) {
  console.log("FREE");
} else if (age1 >= 5 && age1 < 10) {
  console.log("$10");
} else if (age1 >= 10 && age1 < 65) {
  console.log("$20");
} else {
  console.log("INVALID AGE!");
}

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!!!");
// }

// =====================
// COMBINING && and ||
// =====================
const age2 = 8;
if (!((age2 >= 0 && age2 < 5) || age2 >= 65)) {
  console.log("YOU ARE NOT A BABY OR A SENIOR!");
}
