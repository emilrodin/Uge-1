// Basis funktion for plantevanding
function waterPlant() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Planten blev vandet med succes!");
      } else {
        reject("Åh nej! Planten fik for meget vand.");
      }
    }, 1000);
  });
}

// Opgave 1: Grundlæggende async/await
async function basicWatering() {
  try {
    const result = await waterPlant();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

console.log("Opgave 1: Grundlæggende async/await");
basicWatering();

// Opgave 2: Sekventiel vanding af flere planter
async function waterMultiplePlants(numberOfPlants) {
  console.log(`Starter vanding af ${numberOfPlants} planter...`);

  for (let i = 0; i < numberOfPlants; i++) {
    try {
      const result = await waterPlant();
      console.log(`Plante ${i + 1}: ${result}`);
    } catch (error) {
      console.error(`Plante ${i + 1}: ${error}`);
    }
  }

  console.log("Færdig med at vande alle planter.");
}

console.log("\nOpgave 2: Sekventiel vanding af flere planter");
waterMultiplePlants(3);

// Opgave 3: Parallel vanding med Promise.all (opdateret, mere pædagogisk version)
async function waterPlantsInParallel(numberOfPlants) {
  console.log(`Starter parallel vanding af ${numberOfPlants} planter...`);

  // Trin 1: Opret et tomt array med det ønskede antal elementer
  const plantArray = Array(numberOfPlants).fill(null);
  console.log("Tomt plantearray oprettet:", plantArray);

  // Trin 2: Brug map() til at erstatte null-værdierne med vandingsløfter
  const wateringPromises = plantArray.map((_, index) => {
    console.log(`Opretter vandingsløfte for plante ${index + 1}`);
    return waterPlant()
      .then(result => `Plante ${index + 1}: ${result}`)
      .catch(error => `Plante ${index + 1}: ${error}`);
  });
  console.log("Array af vandingsløfter oprettet");

  // Trin 3: Brug Promise.all til at vente på alle løfter
  console.log("Venter på at alle planter bliver vandet...");
  const results = await Promise.all(wateringPromises);

  // Trin 4: Vis resultaterne
  console.log("Resultater af parallel vanding:");
  results.forEach(result => console.log(result));

  console.log("Færdig med parallel vanding.");
}

console.log("\nOpgave 3: Parallel vanding med Promise.all (opdateret version)");
waterPlantsInParallel(3);


console.log("\nOpgave 3: Parallel vanding med Promise.all");
waterPlantsInParallel(3);

// Opgave 4: Fejlhåndtering og gentagelse
async function waterPlantWithRetry(maxAttempts) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await waterPlant();
      console.log(`Forsøg ${attempt}: ${result}`);
      return; // Succes, afslut funktionen
    } catch (error) {
      console.error(`Forsøg ${attempt}: ${error}`);
      if (attempt === maxAttempts) {
        console.error("Maksimalt antal forsøg nået. Opgiver vanding.");
      }
    }
  }
}

console.log("\nOpgave 4: Fejlhåndtering og gentagelse");
waterPlantWithRetry(3);

// Opgave 5: Async/await med timeout
function timeout(ms) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms));
}

async function waterPlantWithTimeout(timeoutMs) {
  try {
    const result = await Promise.race([waterPlant(), timeout(timeoutMs)]);
    console.log(result);
  } catch (error) {
    if (error.message === 'Timeout') {
      console.error("Vanding tog for lang tid og blev afbrudt.");
    } else {
      console.error(error);
    }
  }
}

console.log("\nOpgave 5: Async/await med timeout");
waterPlantWithTimeout(1500);