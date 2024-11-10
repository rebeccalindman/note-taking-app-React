/* Övning 1: Månadskonverterare (Lätt)

Uppgift:

Be användaren ange ett nummer mellan 1 och 12. Använd en switch-sats för att konvertera numret till motsvarande månadsnamn. 1: Januari 2: Februari ... 12: December Skriv ut månadsnamnet.

Tips: Hantera ogiltig inmatning genom att inkludera en default-sats. Använd prompt() för att ta emot inmatningen. */
/* 
const userInput = prompt("Ange siffran 1-12 från dagens datum för att representera månaden där 1 är januari och 12 är december.");
let month;

switch (userInput) {
    case "1":
        console.log("januari");
        month = "januari";
        break;
    case "2":
        console.log("februari");
        month = "februari";
        break;
    case "3":
        console.log("mars");
        month = "mars";
        break;
    case "4":
        console.log("april");
        month = "april";
        break;
    case "5":
        console.log("maj");
        month = "maj";
        break;
    case "6":
        console.log("juni");
        month = "juni";
        break;
    case "7":
        console.log("juli");
        month = "juli";
        break;
    case "8":
        console.log("augusti");
        month = "augusti";
        break;
    case "9":
        console.log("september");
        month = "september";
        break;
    case "10":
        console.log("oktober");
        month = "oktober";
        break;
    case "11":
        console.log("november");
        month = "november";
        break;
    case "12":
        console.log("december");
        month = "december";
        break;
    default :
    console.log("Invalid input");
    month = "okänd månad(!)";
    
}
alert ("Det är " + month + " idag"); */


/* Övning 3: Enkel Meny för Enhetskonvertering (Medel)

Uppgift:

Skapa ett program som visar en meny med följande alternativ: 1: Konvertera Celsius till Fahrenheit 2: Konvertera Kilometer till Miles 3: Konvertera Kilogram till Pounds Använd en switch-sats för att hantera användarens val. Be användaren ange det värde som ska konverteras och utför konverteringen. Skriv ut resultatet.

Tips: Använd lämpliga formler för konverteringarna. Exempel: Fahrenheit = Celsius * 9/5 + 32 */

let userInput = prompt("Vad vill du göra? 1: Konvertera Celsius till Fahrenheit, 2: Konvertera Kilometer till Miles, 3: Konvertera Kilogram (kg) till Pounds (lbs). Ange motsvarande siffra för ditt val:");
let oldUnit;
let newUnit;
let validInput = true;

switch(userInput) {
    case "1":
        oldUnit = "Celcius";
        newUnit = "Fahrenheit";
        break;
    case "2":
        oldUnit = "Kilometer";
        newUnit = "Miles";
        break;
    case "3":
        oldUnit = "kg";
        newUnit = "lbs";
        break;
    default :
        alert("Felaktig inmatning av alternativ");
        validInput = false;
        break;
}

userInput = prompt (`Ange värdet i ${oldUnit} på det du vill konvertera till ${newUnit}`);
let value = 0; // default value

switch (newUnit) {
    case "Fahrenheit":
        //°F = (°C x 1.8) + 32
        value = Number(userInput) * 1.8 + 32;
        break;
    case "Miles":
        //1 kilometer = 0.62 miles
        value = Number(userInput) * 0.62;
        break;
    case "lbs":
        // 1 kg = 2.2046 lbs
        value = Number(userInput) * 2.2046;
        break;

    default:
        alert ("Nu blev det fel!")
        validInput = false;
        break;
}
if (validInput == true){
    alert(`${userInput} ${oldUnit} = ${value} ${newUnit}`);
}
else {
    alert ("Ledsen, men nu blev det fel någonstans. Gör om och gör rätt!")
}

/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

