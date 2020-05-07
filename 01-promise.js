const timer = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => resolve('hello world'), 1000);
    } else {
      reject('hello error');
    }
  });
};

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
