/* Övning: Temperaturbedömning (Lätt)

Uppgift:

Be användaren ange temperaturen i Celsius. Om temperaturen är över 30 grader, skriv ut "Det är väldigt varmt ute." Om temperaturen är mellan 20 och 30 grader, skriv ut "Det är varmt ute." Om temperaturen är mellan 10 och 20 grader, skriv ut "Det är svalt ute." Annars, skriv ut "Det är kallt ute."

Tips: Kom ihåg att konvertera användarinmatningen till ett nummer. */

/* 
const temperature = Number(prompt("Vad är det för temperatur? Ange i C:"));
console.log(temperature, typeof temperature);

temperature > 30 ? console.log("Det är väldigt varmt ute")
: temperature <= 30 && temperature > 20 ? console.log("Det är väldigt varmt ute")
: temperature <= 20 && temperature > 10 ? console.log("Det är svalt ute")
: console.log("Det är kallt ute");

 */

/* Övning: Betygskonvertering (Medel)

Uppgift:

Be användaren ange ett numeriskt betyg mellan 0 och 100. Konvertera betyget till en bokstav enligt följande: 90-100: A 80-89: B 70-79: C 60-69: D 0-59: F Skriv ut det motsvarande bokstavsbetyget.

Tips: Använd flera if-else-if-satser för att kontrollera intervallen.

Övning: Butiksrabatt (Medel) */

/* let grade = prompt("Ange poäng");

while (isNaN(grade) || grade > 100 || grade < 0) {
    alert("Du angav ett felaktigt värde. Ange siffra 0-100:");
    grade = prompt("Ange poäng");
    // Make sure to convert the valid input into a number
    !isNaN(grade) ? grade = Number(grade) : alert("fel inmatning");
    
}

if (grade >= 90) {
    console.log("Betyg: A");
} else if (grade >= 80) {
    console.log("Betyg: B");
} else if (grade >= 70) {
    console.log("Betyg: C");
} else if (grade >= 60) {
    console.log("Betyg: D");
} else {
    console.log("Betyg: F");
}
 */

/* Övning: Butiksrabatt (Medel)

Uppgift:

Be användaren ange sin kundtyp: "Ny" eller "Återkommande". Be användaren ange köpbeloppet. Om kunden är "Återkommande" och köpbeloppet är över 500 kr, ge 15% rabatt. Om kunden är "Ny" och köpbeloppet är över 500 kr, ge 10% rabatt. Skriv ut det slutliga priset efter rabatt.

Tips: Använd logiska operatorer för att kombinera villkor. */

/* 
Övning: Lösenordskontroll (Medel)

Uppgift:

Be användaren ange ett lösenord. Kontrollera att lösenordet uppfyller följande kriterier: Minst 8 tecken långt. Innehåller minst en siffra. Innehåller minst en versal bokstav. Skriv ut om lösenordet är godkänt eller inte.

Tips: Använd string-metoder och regex för att kontrollera lösenordet (eller enklare kontroller om regex inte är bekant). 
*/


let password = prompt("Ange ditt lösenord: ");

let letterCount = password.replace(/\s+/g, '').length;

console.log(letterCount) //30




