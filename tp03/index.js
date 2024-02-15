import fs from 'fs';

// fs.readFile('./data/dragons.json', { encoding: 'utf8' }, (err, data) => {
//   // impossible de lire le fichier
//   if (err) {
//       console.log("File read failed:", err);
//       return;
//   }
//   // success
//   // JSON.parse permet de transformer un fichier JSON en un objet JSON JS
//   console.log('File data:', JSON.parse(data)) 
// })

const fileData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/dragons.json', { encoding: 'utf8' }, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(data));
    });
  });
}

fileData()
  .then(data => {
    console.log(data)
    let dragons = data.dragons;
    console.log("Dragon le plus âgé", dragons.reduce((acc, curr) => acc.age > curr.age ? acc : curr));
    console.log("Dragon le plus jeune", dragons.reduce((acc, curr) => acc.age < curr.age ? acc : curr));

    let dragonsSorted = dragons.sort((a, b) => b.age - a.age);
    console.log("Dragons ordonnés par âge décroissant", dragonsSorted);
  })
  .catch(err => console.log(err));

  