async function waterPlant() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const chance = Math.random();
        
        if (chance < 0.25) {
          reject('Planten døde!');
        } else if (chance < 0.35) {
          reject('Planten døde alligevel!');
        } else {
          resolve('Planten lever!');
        }
      }, 1000);
    });
  }
  
  async function gardener() {
    for (let i = 0; i < 10; i++) {
      try {
        const result = await waterPlant();
        console.log(`Forsøg ${i + 1}: ${result}`);
      } catch (error) {
        console.error(`Forsøg ${i + 1}: ${error}`);
        break; // Stopper funktionen hvis planten dør
      }
    }
    console.log('Tak fordi du vandede planten!');
  }
  
  // Kør gardener() og log resultatet til konsollen
  gardener();