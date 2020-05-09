const timer = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve('Hello World'), 1000);
});

timer().then(message => {
  console.log(message);
  timer().then(message2 => {
    console.log(message2);
    timer().then(message3 => {
      console.log(message3);
      timer().then(message4 => {
        console.log(message4);
      });
    });
  });
});
