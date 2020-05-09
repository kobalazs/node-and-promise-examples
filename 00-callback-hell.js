const timer = (callback) => {
  setTimeout(callback, 1000);
};

timer(() => {
  console.log('Hello World');
  timer(() => {
    console.log('Hello World');
    timer(() => {
      console.log('Hello World');
    });
  });
});
