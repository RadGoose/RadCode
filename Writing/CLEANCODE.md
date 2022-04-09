# Clean Code by Robert C. Martin

## Föreläsning 1

Mjukvaruutveckling är ett hantverk. Dålig kod är vad som sänker projekt.

Ingen skriver bra kod från början. Att lösa problemet är bara halva jobbet. Efter vi löst problemet så städar vi koden. När vi renskrivit vad vi har gjort är vi klara.

Innehållet av en funktion ska inte vara mer än en abstraktionsnivå under dess namn.

Regel nr 1: Funktioner ska vara korta.
Regel nr 2: Funktioner ska vara kortare än så.

Funktioner ska göra en sak. En funktion gör en sak när man inte meningsfullt kan dra ut en ytterligare funktion ur den.

Vi vill inte inventera mer än en eller två gånger i en funktion. Den ska inte innehålla mer än tre argument (input till funktionen), behövs mer än tre kan man förslagsvis skapa ett objekt med dessa.

Vi kommer få rätt många funktioner. Det är således viktigt att ha rutiner för namngivning och kompartimentalisering av dessa.

Vi använder (nästan) aldrig en booleska argument i en funktion. En funktion som tar booleska argument har en if-statement (en om sant - en om falskt) och kan således delas upp i två funktioner. Undantag kan vara när man sätter State på något (ex. en Switch)

Vi undviker Switch-statements, som vid ändringar kan förstöra logiken i programmet. Prioritera modularitet. En enskild förändring eller tillagd funktion ska inte kunna förstöra logiken utanför den egna klassen.

Vår kod innehåller nästan inga biverkningar. Om en funktion orsakar att systemet ändrar State har den funktionen biverkningar. Öppnar vi en fil stänger vi den. Vi kan ex. skapa Lambda-funktioner som automatiskt stänger en fil efter vi har använt den. Tänk annars på det som HTML <ÖppnaFil>Vad vi vill göra</StängFil>.

En funktion som returnerar void kommer ha biverkningar. Men om en funktion som returnerar ett värde har biverkningar gör den mer än en sak.

Undvik repetition. Särskilt när man kopierar flera rader kod.
