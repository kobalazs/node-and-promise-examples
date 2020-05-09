const timer = id => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Resolving ${id}...`);
    resolve(`Hello World ${id}`);
  }, Math.random() * 1000);
});

Promise
  .all([timer(1), timer(2)])
  .then(result => console.log(result));
