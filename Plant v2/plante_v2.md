## Opgave 1: Grundlæggende async/await

### Beskrivelse

Implementer en funktion `basicWatering()`, der bruger async/await til at vande en plante ved hjælp af `waterPlant()` funktionen. Funktionen skal håndtere både succesfuld vanding og fejl.

### Krav

1. Opret en async funktion `basicWatering()`:
   - Brug `await` til at vente på resultatet af `waterPlant()`.
   - Brug `try/catch` til at håndtere både succes og fejl.
   - Log resultatet eller fejlen til konsollen.

2. Kald `basicWatering()` funktionen og observer resultatet.

### Læringsmål
Opsamling fra tidligere. Grundlæggende asynkron programmerings færdigheder.

## Opgave 2: Sekventiel vanding af flere planter

### Beskrivelse

Implementer en funktion `waterMultiplePlants(numberOfPlants)`, der bruger async/await til at vande et antal planter sekventielt.

### Krav

1. Opret en async funktion `waterMultiplePlants(numberOfPlants)`:
   - Brug en `for`-loop til at vande hver plante.
   - Brug `await` inden i loopet til at vente på hver vanding.
   - Håndter succes og fejl for hver enkelt plante.
   - Log status for hver plante efter vanding.

2. Kald `waterMultiplePlants(3)` og observer resultaterne.

### Læringsmål
At forstå hvor langsomt det kan være at køre flere promises på en gang.

## Opgave 3: Parallel vanding med Promise.all

### Beskrivelse

Implementer en funktion `waterPlantsInParallel(numberOfPlants)`, der bruger Promise.all og async/await til at vande flere planter samtidigt. Denne opgave vil hjælpe dig med at forstå, hvordan man arbejder med arrays og promises i en parallel kontekst.

### Krav

1. Opret en async funktion `waterPlantsInParallel(numberOfPlants)`:
   
   a. Opret et tomt array med det ønskede antal elementer:
      - Brug `Array(numberOfPlants)` til at oprette et array med den ønskede længde.
      - Brug `.fill(null)` til at fylde arrayet med null-værdier.
      - Log det tomme array til konsollen for at visualisere strukturen.
   
   b. Brug `map()` til at oprette et vandingsløfte for hver plante:
      - Erstat hver null-værdi med et kald til `waterPlant()`.
      - Brug `.then()` og `.catch()` inde i map-funktionen til at formatere resultatet for hver plante.
      - Log en besked for hvert oprettet vandingsløfte.
   
   c. Anvend `Promise.all()` sammen med `await` for at vente på alle vandinger:
      - Forklar kort, hvad Promise.all gør, og hvorfor vi bruger det her.
   
   d. Log resultaterne for alle planter:
      - Brug `forEach()` til at gennemgå og logge hvert resultat.

2. Kald `waterPlantsInParallel(3)` og sammenlign resultaterne med den sekventielle metode fra opgave 2.

### Tips

- Husk at `map()` returnerer et nyt array uden at ændre det originale.
- Promise.all() tager et array af promises og returnerer et enkelt promise, der løses, når alle input-promises er løst.

### Læringsmål
At bruge forskellige array metoder og at gøre brug af parallel promises.


## Opgave 4: Fejlhåndtering og gentagelse

### Beskrivelse

Implementer en funktion `waterPlantWithRetry(maxAttempts)`, der forsøger at vande en plante op til et specificeret antal gange ved hjælp af async/await.

### Krav

1. Opret en async funktion `waterPlantWithRetry(maxAttempts)`:
   - Brug en `for`-løkke til at forsøge vanding op til `maxAttempts` gange.
   - Brug `try/catch` inden i løkken til at håndtere fejl.
   - Hvis vandingen lykkes, afslut funktionen med det samme.
   - Hvis alle forsøg mislykkes, log en besked om at opgive vandingen.

2. Kald `waterPlantWithRetry(3)` og observer, hvordan funktionen håndterer gentagne fejl.

### Læringsmål
At forsøge opnå positivt resultat x antal gange, indtil det er et accepteret promise.


## Opgave 5: Async/await med timeout

### Beskrivelse

Implementer en funktion `waterPlantWithTimeout(timeoutMs)`, der bruger async/await og Promise.race til at afbryde vandingen, hvis den tager for lang tid.

### Krav

1. Opret en async funktion `waterPlantWithTimeout(timeoutMs)`:
   - Brug `Promise.race()` sammen med `await` til at konkurrere mellem `waterPlant()` og `timeout(timeoutMs)`.
   - Håndter både succesfuld vanding, timeout og andre fejl.
   - Log det passende resultat baseret på udfaldet.

2. Kald `waterPlantWithTimeout(1500)` og observer, hvordan funktionen håndterer både hurtig vanding og timeout-situationer.

### Læringsmål
At man kan kalde to forskellige promises på en gang, men beholde den som er hurtigst. 