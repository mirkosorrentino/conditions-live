// chiedo l'età all'utente con due prompt
// se il primo è maggiore del secondo stampo che il primo è più grande del secondo, altrimenti se hanno la stessa età dico che sono grandi uguali, altrimenti dico che il secondo è più grande del primo

// data input
const user1Age = parseInt(prompt ("Ciao utente 1, quanti anni hai?"));
console.log (user1Age, typeof user1Age);

const user2Age = parseInt(prompt("Ciao utente 2, quanti anni hai?"));
console.log (user2Age, typeof user2Age);

// elaboration
let message = "";
if (user1Age > user2Age) {
    message = "La prima persona è più grande della seconda";
} else if (user1Age===user2Age) {
    message = "Le due persone sono coetanee";
} else {
    message="La seconda persona è la più grande"
}

// output
console.log(message);