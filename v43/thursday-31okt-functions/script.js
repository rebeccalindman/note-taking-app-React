// syntax

// function nameOfTheFunction(parameters) {
//     // code
//     return result1
// }

//? Skapa enkel funktion utan parametrar - 1

// function sayHello() {
//     console.log("Hello world");
// }
// sayHello(); // anropar funktionen


//? Skapa enkel funktion med parametrar - 2

// function sayHelloWithName(name, name2) {
//     console.log("Hello " + name + " and " + name2);
// }
// sayHelloWithName("Colleen", "John");


//? Vad är return?
// return möjliggör att vi får ut ett resultat från fuktionen, utan return så returneras undefined

//? Tidigt avslut av en funktion

function findSquareRoot(x) {
    if (x < 0) {
        return "Can't find square root of a negative number";
    } else {
        return Math.sqrt(x);
    }

}
console.log(findSquareRoot(9));
console.log(findSquareRoot(-11));

function add(x, y) {
    return x + y;
}
console.log(add(1, 2));

// Three types of functions:
    // Anonymous functions - används oftast som argument till en annan funktion, eller tilldelas till variabler -- minskar risken för konflikter -- good for //!callback functions
    // named functions - lätt att anropa, t.ex. om funktionen ska anropas flera gånger - när en funktion är central för koden, viktigt med beskrivande namn
    // arrow functions -- kortare och mer koncisa funktioner -- har problem med this. , så använd inte för objekt men för callback
        // har inbyggd return, och om bara en sak händer inom arrow funcction så behövs inte {}


let num = [1, 2, 3, 4, 5];

//let multiply = num.map(x => x * 2);
let multiply = num.map(x) => x * 2;
console.log(multiply);
