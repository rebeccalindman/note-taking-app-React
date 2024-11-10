
/* let text = `hej`;
console.log(text); */

/* toUpperCase();
toLowerCase(); */

/* let firstText = "Jag är bäst";
let toUpperCaseText = firstText.toUpperCase(); //parentes krävs för att funktionen/metoden ska köras
let toLowerCaseText = firstText.toLowerCase(); //parentes krävs för att funktionen/metoden ska köras
console.log(firstText);
console.log(toUpperCaseText);
console.log(toLowerCaseText);
 */

// chatAt(index)
// Returnerar tecknet på den angivna positionen i strängen
/* 
let firstText = "Jag är bäst";
let firstChar = firstText.charAt(0); // index är zero-based  , dvs den förta bokstaven är 0

console.log(firstChar);
let firstChar = firstText.charAt(0).toLowerCase(); // du kan lägga till flera funktioner/metoder
console.log(firstChar);

let fifthChar = firstText.charAt(4);
let fifthIndexChar = firstText.charAt(5); //viktigt hur man namnger sina variabler

console.log(fifthChar);
console.log(fifthIndexChar);

 */

// 1.2.3 slice (start, end)
// Extraherar en del av en sträng och returnerar den som en ny sträng.

/* let firstText = "Jag är bäst";
let slicedText = firstText.slice(1,8);// method      String.slice(start?: number, end?: number): string  -- behöver inget slut om man vill ta hela resterande

console.log(slicedText); */

// replace(searchValue, newValue)
//Ersätter en del av strängen med en anann sträng
/* 
let firstText = "Jag är bäst";
let newSentence = firstText.replace("Jag", "Rebecca");

console.log(firstText);
console.log(newSentence);

 */

// includes(searchString)

/* let firstText = "Jag är bäst";
let includeText = firstText.includes("är", 0); // if position inte ges så antas 0 och hela kontrolleras
console.log(includeText);
includeText = firstText.includes("är", 5); // från 6e bokstaven och framåt kollas

console.log(includeText); */

/* let aNumber = 3.1543254653;
let twoDecimals = aNumber.toFixed(2);
console.log(twoDecimals); //gives a string not a number anymore
 */
// parseInt() och parseFloat()
let intString ="123";
let floatString ="3.123";
let invalidString ="123asv322"; //slutar läsa vid första invalid value, dvs bokstäverna

let intValue = parseInt(intString);
let floatValue = parseFloat(floatString);
let invalidValue = parseInt(invalidString);

console.log("heltal: ", typeof intValue, intValue);
console.log("flyttal: ", typeof floatValue, floatValue);
console.log("ogiltig konvertering: ", typeof invalidValue, invalidValue);