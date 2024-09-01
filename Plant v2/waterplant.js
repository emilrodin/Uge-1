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
  console.log("Opgave 1: Grundlæggende async/await");
  try {
    const result = await waterPlant();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  console.log("Opgave 1 afsluttet.\n");
}

// Opgave 2: Sekventiel vanding af flere planter
async function waterMultiplePlants(numberOfPlants) {
  console.log("Opgave 2: Sekventiel vanding af flere planter");
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
  console.log("Opgave 2 afsluttet.\n");
}

// Opgave 3: Parallel vanding med Promise.all
async function waterPlantsInParallel(numberOfPlants) {
  console.log("Opgave 3: Parallel vanding med Promise.all");
  console.log(`Starter parallel vanding af ${numberOfPlants} planter...`);

  const plantArray = Array(numberOfPlants).fill(null);
  console.log("Tomt plantearray oprettet:", plantArray);

  const wateringPromises = plantArray.map((_, index) => {
    console.log(`Opretter vandingsløfte for plante ${index + 1}`);
    return waterPlant()
      .then(result => `Plante ${index + 1}: ${result}`)
      .catch(error => `Plante ${index + 1}: ${error}`);
  });
  console.log("Array af vandingsløfter oprettet");

  console.log("Venter på at alle planter bliver vandet...");
  const results = await Promise.all(wateringPromises);

  console.log("Resultater af parallel vanding:");
  results.forEach(result => console.log(result));

  console.log("Færdig med parallel vanding.");
  console.log("Opgave 3 afsluttet.\n");
}

// Opgave 4: Fejlhåndtering og gentagelse
async function waterPlantWithRetry(maxAttempts) {
  console.log("Opgave 4: Fejlhåndtering og gentagelse");
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const result = await waterPlant();
      console.log(`Forsøg ${attempt}: ${result}`);
      break; // Succes, afslut løkken
    } catch (error) {
      console.error(`Forsøg ${attempt}: ${error}`);
      if (attempt === maxAttempts) {
        console.error("Maksimalt antal forsøg nået.");
      }
    }
  }
  console.log("Opgave 4 afsluttet.\n");
}

// Opgave 5: Async/await med timeout
function timeout(ms) {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), ms));
}

async function waterPlantWithTimeout(timeoutMs) {
  console.log("Opgave 5: Async/await med timeout");
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
  console.log("Opgave 5 afsluttet.\n");
}

// Hovedfunktion til at køre alle opgaver sekventielt
async function runAllExercises() {
  await basicWatering();
  await waterMultiplePlants(3);
  await waterPlantsInParallel(3);
  await waterPlantWithRetry(3);
  await waterPlantWithTimeout(500);
  console.log("Alle opgaver er gennemført!");
}

// Start programmet
runAllExercises();