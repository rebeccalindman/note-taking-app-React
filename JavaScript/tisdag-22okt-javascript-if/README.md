Fördjupa JavaScript-kunskaper - Ämnen: - If-satser, else if, else - Switch-satser - Loopar: for, while, do-while - Logiska operatorer och villkor

if/else if/else Övning:

Övning: Temperaturbedömning (Lätt)

Uppgift:

Be användaren ange temperaturen i Celsius. Om temperaturen är över 30 grader, skriv ut "Det är väldigt varmt ute." Om temperaturen är mellan 20 och 30 grader, skriv ut "Det är varmt ute." Om temperaturen är mellan 10 och 20 grader, skriv ut "Det är svalt ute." Annars, skriv ut "Det är kallt ute."

Tips: Kom ihåg att konvertera användarinmatningen till ett nummer.

Övning: Betygskonvertering (Medel)

Uppgift:

Be användaren ange ett numeriskt betyg mellan 0 och 100. Konvertera betyget till en bokstav enligt följande: 90-100: A 80-89: B 70-79: C 60-69: D 0-59: F Skriv ut det motsvarande bokstavsbetyget.

Tips: Använd flera if-else-if-satser för att kontrollera intervallen.

Övning: Butiksrabatt (Medel)

Uppgift:

Be användaren ange sin kundtyp: "Ny" eller "Återkommande". Be användaren ange köpbeloppet. Om kunden är "Återkommande" och köpbeloppet är över 500 kr, ge 15% rabatt. Om kunden är "Ny" och köpbeloppet är över 500 kr, ge 10% rabatt. Skriv ut det slutliga priset efter rabatt.

Tips: Använd logiska operatorer för att kombinera villkor.

Övning: Lösenordskontroll (Medel)

Uppgift:

Be användaren ange ett lösenord. Kontrollera att lösenordet uppfyller följande kriterier: Minst 8 tecken långt. Innehåller minst en siffra. Innehåller minst en versal bokstav. Skriv ut om lösenordet är godkänt eller inte.

Tips: Använd string-metoder och regex för att kontrollera lösenordet (eller enklare kontroller om regex inte är bekant).

Övning: Trafikljus (Medel)

Uppgift:

Be användaren ange färgen på ett trafikljus: "Röd", "Gul" eller "Grön". Skriv ut följande meddelanden baserat på färgen: "Stanna" för "Röd". "Förbered att stanna" för "Gul". "Kör" för "Grön". Hantera även ogiltiga inmatningar.

Tips: Använd if-else-satser och tänk på att göra inmatningen skiftlägesokänslig med toLowerCase().

Övning: Nummer i Ord (Svår)

Uppgift:

Be användaren ange ett tal mellan 0 och 5. Konvertera talet till dess motsvarande ord och skriv ut det. 0: "Noll" 1: "Ett" 2: "Två" 3: "Tre" 4: "Fyra" 5: "Fem" Om talet är utanför intervallet, skriv ut "Ogiltigt tal".

Tips: Använd if-else-satser eller en switch-sats.

Övning: Planetvikt (Svår)

Uppgift:

Be användaren ange sin vikt i kilogram. Be användaren välja en planet (t.ex. "Mars", "Jupiter"). Beräkna och skriv ut vad användaren skulle väga på den valda planeten baserat på gravitationsfaktorer: Mars: 0.38 Jupiter: 2.34 Månen: 0.16 Hantera ogiltiga inmatningar.

Tips: Använd logiska operatorer och if-else-satser för att hantera valen.

Övning: Quizspel (Svår)

Uppgift:

Skapa ett enkelt quiz med tre frågor. För varje korrekt svar får användaren en poäng. Efter sista frågan, skriv ut den totala poängen.

Tips: Använd if-satser för att kontrollera svaren. Frågorna kan vara flervalsfrågor eller fritext.

Övning: Validera E-postadress (Svår)

Uppgift:

Be användaren ange en e-postadress. Kontrollera att e-postadressen innehåller "@" och ".". Skriv ut om e-postadressen är giltig eller ogiltig.

Övning: Enkel Bankomat (Svår)

Uppgift:

Be användaren ange en PIN-kod. Ge användaren tre försök att ange rätt PIN (t.ex. "1234"). Om rätt PIN anges, skriv ut "Välkommen!". Om försök tar slut, skriv ut "Kortet är blockerat.".

Tips: Använd en loop tillsammans med if-satser.

Övning: Matbeställning (Medel)

Uppgift:

Skapa en meny med tre maträtter och deras priser. Be användaren välja en maträtt genom att ange dess nummer. Skriv ut det valda valet och priset.

Tips: Använd if-else-satser för att matcha valet med maträtten.

Övning: Hastighetskontroll (Medel)

Uppgift:

Be användaren ange sin hastighet i km/h. Om hastigheten är över 120 km/h, skriv ut "För fort, böter!". Om hastigheten är mellan 80 km/h och 120 km/h, skriv ut "Godkänd hastighet.". Om hastigheten är under 80 km/h, skriv ut "För långsamt, öka hastigheten.".

Tips: Använd if-else-if-satser för att hantera intervallen.

Övning: Enkel Valutakonverterare (Lätt)

Uppgift:

Be användaren ange ett belopp i SEK. Konvertera beloppet till EUR (1 EUR = 10 SEK). Skriv ut det konverterade beloppet i EUR.

Tips: Använd enkel beräkning och skriv ut resultatet med två decimaler.

Övning: Filmrekommendation (Medel)

Uppgift:

Be användaren ange sin ålder. Baserat på åldern, rekommendera en film: Under 13: "Animerad film" 13 till 17: "Ungdomsfilm" 18 och över: "Vuxenfilm"

Tips: Använd if-else-if-satser för att hantera åldersintervallen.

Övning: Matematiskt Spel (Svår)

Uppgift:

Generera två slumpmässiga tal mellan 1 och 10. Be användaren att multiplicera dessa två tal och ange svaret. Kontrollera om svaret är korrekt och skriv ut ett passande meddelande.

Tips: Använd Math.random() och Math.floor() för att generera talen. Använd if-satser för att kontrollera svaret.

Övning: BMI-kalkylator (Medel)

Uppgift:

Be användaren ange sin längd i meter och vikt i kilogram. Beräkna användarens BMI med formeln: BMI = vikt / (längd * längd). Skriv ut BMI och en hälsoklassificering: Under 18.5: "Undervikt" 18.5 - 24.9: "Normalvikt" 25 - 29.9: "Övervikt" 30 och över: "Fetma"

Tips: Använd if-else-if-satser för att klassificera BMI-värdet.

Övning: Resekostnadskalkylator (Svår)

Uppgift:

Be användaren ange avståndet i kilometer och bränsleförbrukningen i liter per mil. Be användaren ange bränslepriset per liter. Beräkna och skriv ut den totala resekostnaden.

Tips: Kom ihåg att 1 mil = 10 km. Använd matematiska beräkningar och if-satser för validering.

Övning: Kontrollera Anagram (Svår)

Uppgift:

Be användaren ange två ord. Kontrollera om orden är anagram av varandra (dvs. om de innehåller exakt samma bokstäver i olika ordning). Om de är anagram, skriv ut "Orden är anagram." Annars, skriv ut "Orden är inte anagram."

Tips: Använd split(''), sort(), join('') för att sortera bokstäverna i varje ord. Jämför de sorterade strängarna för att avgöra om orden är anagram. Gör strängarna gemener med toLowerCase() för att undvika problem med versaler.

Övning: Nummergissningsspel (Svår)

Uppgift:

Skapa ett spel där datorn väljer ett slumpmässigt tal mellan 1 och 50. Användaren har fem försök att gissa talet. Efter varje gissning, ge en ledtråd om talet är högre eller lägre. Skriv ut ett meddelande om användaren vinner eller förlorar.

Tips: Använd en loop för att räkna försök. Använd if-else-satser för att jämföra gissningen med det slumpmässiga talet.

Övningar med olika svårighetsgrader som kombinerar if-satser med funktioner och metoder för datatyperna String, Number och Object:

Övning 1: Kontrollera Versaler i en Sträng (Lätt)

Uppgift:

Be användaren ange ett ord. Kontrollera om ordet innehåller några versaler (stora bokstäver). Om ordet innehåller versaler, skriv ut "Ordet innehåller versaler." Annars, skriv ut "Ordet innehåller inga versaler."

Tips: Använd toLowerCase() eller toUpperCase() för att jämföra strängen. Jämför originalsträngen med strängen konverterad till gemener eller versaler.

Övning 2: Jämföra Tal med toFixed (Lätt)

Uppgift:

Be användaren ange ett decimaltal. Om talet avrundat till två decimaler är större än 10.5, skriv ut "Talet är större än 10.5." Annars, skriv ut "Talet är mindre än eller lika med 10.5."

Tips: Använd toFixed(2) för att avrunda talet till två decimaler. Kom ihåg att toFixed() returnerar en sträng; konvertera tillbaka till Number vid behov.

Övning 3: Kontrollera Egenskap i Objekt (Medel)

Uppgift:

Skapa ett objekt person med egenskaperna namn, ålder och stad. Be användaren ange en egenskap att söka efter (t.ex. "ålder"). Kontrollera om egenskapen finns i objektet med hjälp av Object.keys(). Om egenskapen finns, skriv ut dess värde. Annars, skriv ut "Egenskapen finns inte."

Tips: Använd Object.keys(person) för att få en lista över egenskaper. Använd includes() för att kontrollera om egenskapen finns i arrayen.

Övning 4: Validera Telefonnummer (Medel)

Uppgift:

Be användaren ange ett telefonnummer. Kontrollera att telefonnumret: Är exakt 10 tecken långt. Innehåller endast siffror. Om båda villkoren uppfylls, skriv ut "Telefonnumret är giltigt." Annars, skriv ut "Telefonnumret är ogiltigt."

Tips: Använd length för att kontrollera längden på strängen. Använd isNaN() för att kontrollera om strängen endast innehåller siffror.

Övning 5: Kontrollera Inledande Text (Medel)

Uppgift:

Be användaren ange en mening. Extrahera de första fem tecknen med slice(). Om de första fem tecknen är "Hello", skriv ut "Hälsning upptäckt." Annars, skriv ut "Ingen hälsning upptäckt."

Tips: Använd .slice()

Övning 6: Kontonummer Validering (Svår)

Uppgift:

Be användaren ange ett kontonummer. Kontrollera att kontonumret: Är exakt 14 tecken långt. Innehåller endast siffror. Börjar med "75". Om alla villkor uppfylls, skriv ut "Kontonumret är giltigt." Annars, skriv ut vilket villkor som inte uppfylldes.

Tips: Använd startsWith() för att kontrollera inledande tecken. Använd en loop eller isNaN() för att kontrollera om strängen innehåller endast siffror.

Övning 7: Jämföra Produkters Priser (Svår)

Uppgift:

Skapa två objekt produktA och produktB med egenskaperna namn och pris. Jämför priserna på de två produkterna. Om produktA är dyrare än produktB, skriv ut "produktA.namn är dyrare." Om produktB är dyrare, skriv ut "produktB.namn är dyrare." Om de kostar lika mycket, skriv ut "Produkter kostar lika mycket."

Tips: Åtkomst till objektets egenskaper via punktnotation, t.ex. produktA.pris.

Övning 8: Kontrollera Palindrom (Svår)

Uppgift:

Be användaren ange ett ord. Kontrollera om ordet är ett palindrom (stavas likadant fram- och baklänges). Om det är ett palindrom, skriv ut "Ordet är ett palindrom." Annars, skriv ut "Ordet är inte ett palindrom."

Tips: Använd split(''), reverse(), join('') för att vända strängen. Jämför den ursprungliga strängen med den omvända strängen. Gör strängen gemener med toLowerCase() för att undvika problem med versaler.

Övning 9: Analys av Textlängd (Mycket Svår)

Uppgift:

Be användaren ange en mening. Räkna antalet ord i meningen genom att använda split(' '). Om meningen innehåller fler än 10 ord, skriv ut "Meningen är för lång." Annars, skriv ut "Meningen är godkänd."

Tips: Använd trim() för att ta bort extra mellanslag i början och slutet. Dela upp meningen i en array av ord med split(' '). Filtrera bort tomma strängar i arrayen om det finns flera mellanslag.

Övning 10: Analysera Studentens Betyg (Mycket Svår)

Uppgift:

Skapa ett objekt student med egenskaperna: namn: studentens namn. betyg: en array av nummer (studentens betyg). stad: studentens stad. Beräkna medelvärdet av betygen i betyg. Om medelvärdet är 90 eller högre, lägg till egenskapen toppelev med värdet true i objektet. Annars, lägg till egenskapen toppelev med värdet false. Skriv ut hela student-objektet.

Tips: Använd en loop eller reduce() för att beräkna summan av betygen. Beräkna medelvärdet genom att dividera summan med antalet betyg. Lägg till en ny egenskap till objektet med student.toppelev = true;