//* Bibblan

//? Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är title, author, numPages - 1.

// const book = {
//     title:"It Ends With Us",
//     author:"Colleen Hoover",
//     numPages: 376,
// }

// console.log(book); 

//? Skapa en array av objekt med flera stycken böcker - 2

// const libraryOfBooks = [
//     {
//         title:"It Ends With Us",
//         author:"Colleen Hoover",
//         numPages: 376
//     },
//     {
//         title:"It Starts With Us - A Novel",
//         author:"Colleen Hoover",
//         numPages: 380
//     },
//     {   
//         title:"War and Peace",
//         author:"Leo Tolstoy",
//         numPages: 540
//     }
// ];

// console.log(libraryOfBooks); 

//? Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars null. Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar - 3.

// const libraryOfBooks = [
//     {
//         title:"It Ends With Us",
//         author:"Colleen Hoover",
//         numPages: 376
//     },
//     {
//         title:"It Starts With Us - A Novel",
//         author:"Colleen Hoover",
//         numPages: 380
//     },
//     {   
//         title:"War and Peace",
//         author:"Leo Tolstoy",
//         numPages: 540
//     }
// ];

// const searchTitle ="It Starts With Us - A Novel";
// const book = libraryOfBooks.filter(book=> book.title===searchTitle);

// const bookIsInLibrary = book.length>0?book[0]:null; 

// console.log(bookIsInLibrary); 

//* Letter Frequency

//? Räkna tecken i en sträng och organisera detta i ett objekt. Skapa en funktion som tar en sträng som input och ger ett objekt som output - 4.

const str = "aaabbbcccdddddeeeefff";

//!vi kanske får forsätta på egen hand senare jag går och äter lunch nu, ,
//! jag pushar och länkar repot strax iaf -- toppen! /Rebecca
    const strAsArray = str.split("a-z");

    // const arrayAsObject = strAsArray.forEach(
    //     function (){
    //         return 

    //     }
    // )

console.log(strAsArray); 

//? Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara antal förekomster av det tecknet - 5.

//? Denna övning kräver dynamiska nycklar - 6.

//? letterFrequency("kalle"); // => {"k": 1. "a": 1, "l": 2, "e": 1} 
//? letterFrequency("aaaa"); // => {"a": 4} 
//? letterFrequency("ni talar bra latin"); // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 } 

//* User Register

//! För samtliga uppgifter nedan, ladda ner och utgå från users.js genom att lägga till <script src="users.js"> innan er script-tag.
//! Då har du en global variabel users som innehåller alla användare.

//? filterByCountry - 7
//! Skapa en funktion som tar emot listan på användare och en landskod och returnerar en ny lista innehållande endast användare med den landskoden.

//? filterByGender - 8
//! Skapa en funktion som tar emot listan på användare och en sträng "Male" eller "Female" och returnerar en ny lista innehållande endast kvinnliga eller manliga användare.

//? listEmails - 9
//! Skapa en funktion som tar emot listan på användare och returnerar en lista innehållandes endast användarnas emailaddresser

//? Utmaning! - Reformat Emails - 10

//! Chefen på bolaget vill att alla användare ska få nya e-mailaddresser. Just nu följer deras e-mail formatet förnamn.efternamn@example.com men chefen vill att de ska följa formatet efternamn.förnamn@evilcorp.countrydomain.
//!Skapa en funktion som listar alla e-mail-adresser enligt det nya formatet.

// Land 	Nat 	Domän
// Frankrike 	FR 	.fr
// Schweiz 	CH 	.ch
// Tyskland 	DE 	.de
// Norge 	NO 	.no
// USA 	US 	.us
// Turkiet 	TR 	.tr
// Findland 	FI 	.fi
// Storbritannien 	GB 	.uk
// Nederländerna 	NL 	.nl
// Nya Zeeland 	NZ 	.nz
// Australien 	AU 	.au
// Estland 	ES 	.ee
// Irland 	IE 	.ie
// Danmark 	DK 	.dk
// Iran 	IR 	.ir
// Brasilien 	BR 	.br
// Kanada 	CA 	.ca