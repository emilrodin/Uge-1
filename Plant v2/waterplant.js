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
    let watering = await waterPlant();
    console.log(watering);
  } catch (error) {
    console.log();
  }
  console.log("Opgave 1 afsluttet.\n");
}

// Opgave 2: Sekventiel vanding af flere planter
async function waterMultiplePlants(numberOfPlants) {
  console.log("Opgave 2: Sekventiel vanding af flere planter");
  for (let i = 0; i < numberOfPlants; i++) {
    try {
      let waterone = await waterPlant();
      console.log(waterone, i);
    } catch (error) {
      console.log(error, i);
    }
  }
  console.log("Opgave 2 afsluttet.\n");
}

// Opgave 3: Parallel vanding med Promise.all
async function waterPlantsInParallel(numberOfPlants) {
  console.log("Opgave 3: Parallel vanding med Promise.all");

  let a = Array(numberOfPlants).fill(null);
  console.log(a);

  let p = a.map(
    waterPlant().then(console.log("success")).catch(console.log("fail"))
  );
  console.log(p);

  console.log("Opgave 3 afsluttet.\n");
}

// Opgave 4: Fejlhåndtering og gentagelse
async function waterPlantWithRetry(maxAttempts) {
  console.log("Opgave 4: Fejlhåndtering og gentagelse");

  console.log("Opgave 4 afsluttet.\n");
}

// Opgave 5: Async/await med timeout
function timeout(ms) {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Timeout")), ms)
  );
}

async function waterPlantWithTimeout(timeoutMs) {
  console.log("Opgave 5: Async/await med timeout");

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
