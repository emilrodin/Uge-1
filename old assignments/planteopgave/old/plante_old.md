## Opgave: Promise Chaining og Nesting

### Beskrivelse

Opret en funktion `waterPlant()`, som returnerer et promise. Funktionen skal simulere vanding af en plante med følgende betingelser:
- Der skal være 25% chance for, at planten dør.
- Hvis planten overlever, skal der være 10% chance for, at den dør alligevel.
- Der skal være en forsinkelse på 1000ms, før du resolver eller rejecter promise.

Kør `waterPlant()` 3 gange i træk, og håndter resultaterne med `.then()`, `.catch()`, og `.finally()`.

### Krav

1. Opret funktionen `waterPlant()`:
   - Brug `setTimeout` til at simulere forsinkelsen.
   - Brug `Math.random()` til at bestemme, om planten dør.
   - Resolver promise, hvis planten lever; ellers reject den.
   
2. Kør `waterPlant()` tre gange i træk og håndter resultaterne:
   - Brug `.then()` til at logge resultaterne af hver vanding.
   - Brug `.catch()` til at håndtere eventuelle fejl.
   - Brug `.finally()` til at takke brugeren for at vande planten.


## Opgave 2.2: Async/Await

### Beskrivelse

Brug `async/await` til at håndtere asynkrone operationer. Implementer funktionen `gardener()`, som skal køre `waterPlant()` 10 gange i streg og håndtere resultaterne med `async/await`.

### Krav

1. Opret funktionen `gardener()`:
   - Kør `waterPlant()` 10 gange ved hjælp af en `for`-løkke.
   - Log resultatet af hver vanding.
   - Hvis planten dør, log det til konsollen og stop funktionen.
   - Brug `await` til at vente på resultaterne.

2. Kør funktionen `gardener()` og log resultatet til konsollen.


