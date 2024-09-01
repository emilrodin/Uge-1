## Opgave 3: Hent Data fra Danmarks Statistik og Async/Await

### Beskrivelse

Hent data fra Danmarks Statistik ved hjælp af `fetch`. Opret en funktion til at hente data og vis resultaterne på en webside ved hjælp af `async/await`.

### Krav

1. Opret en funktion `fetchDataFromDanmarksStatistik(apiEndpoint)`:
   - Brug `fetch` til at hente data fra API'en.
   - Håndter fejl ved hjælp af `try/catch`.
   - Log dataen til konsollen og returner den.
   
2. Når knappen trykkes på, skal data hentes fra API'en og vises i et `<p>`-element på siden.