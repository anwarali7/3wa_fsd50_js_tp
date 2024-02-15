function startFibonacci(delay) {
  let a = 0;
  let b = 1;

  process.stdout.write(`${a} ${b} `);

  const intervalId = setInterval(() => {
    let c = a + b;
    a = b;
    b = c;
    process.stdout.write(`${c} `);
  }, 500);


  setTimeout(() => {
    clearInterval(intervalId);
  }, delay);
}

startFibonacci(10000);