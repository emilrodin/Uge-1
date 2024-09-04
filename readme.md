# Struktur

I 'old assignments' ligger de opgaver, som der tidligere er blevet lavet. Dette er repetition.

I 'client' findes den klient, der skal udvides og bruges til at løse client Opgaver.

I 'server' findes serveren, der skal udvides og bruges til at løse Express Server Opgaver.

I 'plant v2' ligger opgaven til 'Lav blomster opgave v2'.


# Uge 1

## Express Server Opgaver 

Her skal du fokusere på at oprette og administrere en Express-server. Husk at køre npm install i server mappen. Se documentation for hjælp: [Express](https://expressjs.com/en/starter/hello-world.html)


### Opgave 1: Sæt en server op
- Sæt en grundlæggende server op, der kører på en given port.

### Opgave 2: Sæt et "Hello World" endpoint op `/`
- Opret en route, der returnerer "Hello World" på roden af serveren.

### Opgave 3: Opret et "GET" endpoint `/about`
- Tilføj en route, der returnerer et simpelt JSON-objekt med information om applikationen.

### Opgave 4: Opret et "POST" endpoint `/echo`
- Opret et endpoint, der modtager JSON-data fra en klient og returnerer de samme data tilbage.

### Opgave 5: Opret en middleware, der logger requests
- Tilføj en simpel middleware, der logger hver request's metode og URL til konsollen. [Middleware](https://expressjs.com/en/guide/using-middleware.html)

### Opgave 6: Implementer en simpel 404-middleware
- Tilføj en middleware, der returnerer en 404-fejl og en brugerdefineret besked, hvis en route ikke findes.

**TIP:** Husk at bruge CORS og JSON middleware. [CORS](https://www.npmjs.com/package/cors?activeTab=readme) [JSON](https://expressjs.com/en/5x/api.html#express.json)

---

## Async/Await og Fetch

Her laves to tidligere opgaver, der er set før. De ligger i 'old assignments', sammen med løsninger til disse.

### Opgave 1: Lav den gamle blomster opgave
- Læs den blomsteropgave, som der tidligere er lavet i programmeringsfaget.

### Opgave 2: Lav fetch data opgaven 
- Lav den fetch-opgave, som tidligere er lavet i programmeringsfaget.

---

# Uge 2

Hvis uge 1 er lavet kan disse opgaver laves i vilkårlig rækkefølge.

## Async/Await

### Opgave 1: Lav blomster opgave v2 
- Lav den udvidede blomsteropgave. Gør brug af google eller chatten, til at forstå de forskellige funktioner. 
- En god prompt kunne være:  "Løs opgaven: 'Brug `Array(numberOfPlants)` til at oprette et array med den ønskede længde.' Forklar hvad `Array(numberOfPlants)` gør, og eksempler på outputtet af koden". 
- Brug kun chatten til hjælp med del elementer, men lav opgaven selv. 

## Express Server Opgaver

Her udvides Express-serveren med funktionalitet til at håndtere kundedata. Følgende opgaver omfatter CRUD-operationer og filhåndtering:

### Opgave 1: Opsætning af Express Router
- Opret en ny router ved hjælp af `express.Router()` til at håndtere kunde-relaterede routes. 

### Opgave 2: Filhåndtering af kundedata
- Brug `fs.readFileSync` og `fs.writeFileSync` til at læse fra og skrive til en JSON-fil (`customers.json`) for at simulere en simpel database. [fs](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)

### Opgave 3: Implementer CRUD-operationer
- Opret følgende endpoints for kunder:
  - **GET `/`**: Hent alle kunder fra JSON-filen og returner dem som en liste.
  - **DELETE `/delete/:id`**: Slet en kunde baseret på deres ID fra JSON-filen og gem de opdaterede data.

### Opgave 4: Tilføj et POST-endpoint til at oprette en ny kunde
- Opret et nyt endpoint, der accepterer JSON-data fra klienten for at tilføje en ny kunde til `customers.json`. I bestemmer selv hvordan i vil lave unikke id'er

## Client opgaver (fetch) 

Her laves der fetch kald fra klienten til serveren, Axios er hentet ned på klienten, så i skal være velkommen til at bruge det som fetch metode: [Axios](https://axios-http.com/docs/intro)

### Opgave 1: Kald serveren (Brug den press me knappen)
- Lav et fetch fra klienten, der gør brug af et af de GET-endpoints, du har lavet, og log resultatet. Evt. brug try/catch

### Opgave 2: Opret en kunde (Gør brug af den allerede lavet form)
- Lav et fetch fra klienten, der gør brug af de POST-endpoint, du har lavet, og log resultatet. Evt. brug try/catch