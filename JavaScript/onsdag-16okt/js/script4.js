/* Övning 11: Skottårskoll (Svår) Uppgift: Be användaren ange ett årtal. Avgör om året är ett skottår. Ett år är ett skottår om det är jämnt delbart med 4 men inte med 100, om det inte också är delbart med 400. */

// Ask for a year
// Compare year to % 4 and % 100 (and % 400)
// Output if yes: Det är skottår!
// Output if no: Det är inte skottår.


let userInput = prompt("Är det skottår? Ange ett årtal för att kolla om det är skottår:");
let year = 0;
while (isNaN(userInput)) {
    userInput = prompt("FEL! ANGE ENDAST SIFFROR. Är det skottår? Ange ett årtal för att kolla om det är skottår:");
}
year = parseFloat(userInput);
console.log("User input från prompt: ",userInput, "Typ: ", typeof userInput);
console.log("Omvandling till siffror: ", year, "Typ: ", typeof year);


switch (year % 4) {
    case 0: //om jämnt deltbart med 4
        if (year % 100 === 0 && year % 400 !== 0) {
            console.log("Det är inte skottår"); // Not a leap year if divisible by 100 but not by 400
        } else {
            console.log("Det är skottår");
        }
        break;

    default: // om inte jämnt delbart med 4
        console.log("Det är inte skottår");
        break;
}