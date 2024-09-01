function waterPlant() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Generér en tilfældig værdi mellem 0 og 1
        const chance = Math.random();
        
        if (chance < 0.25) {
          // 25% chance for at planten dør
          reject('Planten døde!');
        } else if (chance < 0.35) {
          // 10% chance for at planten dør, selvom den overlever
          reject('Planten døde alligevel!');
        } else {
          // Planten overlever
          resolve('Planten lever!');
        }
      }, 1000);
    });
  }
  
  // Kør waterPlant 3 gange i træk
  waterPlant()
    .then(result => {
      console.log('Første forsøg:', result);
      return waterPlant();
    })
    .then(result => {
      console.log('Andet forsøg:', result);
      return waterPlant();
    })
    .then(result => {
      console.log('Tredje forsøg:', result);
    })
    .catch(error => {
      console.error('Fejl:', error);
    })
    .finally(() => {
      console.log('Tak fordi du vandede planten!');
    });
  