const timer = () => new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(() => resolve('Hello World'), 1000);
  } else {
    reject('hello error');
  }
});

timer()
  .then(text => {
    console.log(text);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('finally');
  });
console.log('finally2');
