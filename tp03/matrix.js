import fs from 'fs';
import readline from 'readline';

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

const matrixJson = JSON.stringify(matrix, null, 2);

const saveDataToFile = (fileName, jsonData) => new Promise((resolve, reject) => {
  fs.writeFile(fileName, jsonData, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve('File has been created');
    }
  });
});

saveDataToFile('matrix.json', matrixJson)
  .then((message) => console.log(message))
  .then(() => {
    // Read data line by line
    const fileStream = fs.createReadStream('matrix.json');
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
      console.log(`Line from file: ${line}`);
    });

    rl.on('close', () => {
      console.log('File has been read');
    });

  })
  .catch((err) => console.error(err));
