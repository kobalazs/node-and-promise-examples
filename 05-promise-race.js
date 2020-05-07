const timer = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`resolving ${id}...`);
      resolve('hello world');
    }, Math.random() * 1000);
  });
};

Promise
  .race([
    timer(0),
    timer(1)
  ])
  .then(result => console.log(result));
