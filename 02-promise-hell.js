const timer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('hello world'), 1000);
  });
};

timer().then(text => {
  console.log(text);
  timer().then(text2 => {
    console.log(text2);
    timer().then(text3 => {
      console.log(text3);
      timer().then(text4 => {
        console.log(text4);
      });
    });
  });
});
