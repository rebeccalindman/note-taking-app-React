/* Skapa ett program som simulerar en enkel inloggningsprocess med tre försök. 
Om användaren anger fel lösenord tre gånger, lås kontot. 
Använd logiska operatorer och if-satser för att hantera villkoren. */

/* 
// correct login credentials 
const userName = "rebecca";
const userPass = "lindman";

// Sign-in sequence for username
let userNameInput = prompt(`What is your username?`);
while (userNameInput !== userName) {
    alert(`This user does not exist. Make sure you have spelled correctly.`);
    userNameInput = prompt(`What is your username?`);

}
    
// Sign-in sequence for password
let attemptsLeft = 4;
let userPassInput = prompt(`Password:`);
while (userPassInput !== userPass && attemptsLeft > 0) {
    attemptsLeft--;
    if (attemptsLeft > 0) {
        alert(`Incorrect password. You have ${attemptsLeft} more attempt(s).`);
        userPassInput = prompt(`Password:`);
    } else {
        alert(`You have made too many attempts. Account has been locked. Please wait 24h before trying again.`);
    }
}

if (userPassInput === userPass) {
    alert(`Welcome! You have successfully signed in.`);
}


 */

/* Övning 1: For-loop för att iterera över tal (Lätt)
Skriv ett program som skriver ut talen 1 till 10 i konsolen. */

/* 
for( let i = 10; i > 0; i--){
    console.log(`${i}`);
}

for( let i = 1; i <= 10; i++){
    console.log(`${i}`);
}
 */

/* Övning 3: Do-while-loop för validering (Svår)
Be användaren ange ett positivt tal.
Fortsätt fråga tills användaren faktiskt anger ett positivt tal. */

/* 
do {
    userInput = prompt("Ange ett positivt tal:");
    console.log("User input: ", userInput, typeof userInput);
} while (isNaN(userInput) || userInput % 2 !== 0);
 */

