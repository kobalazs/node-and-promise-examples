const timer = (callback) => {
  setTimeout(() => callback(), 1000);
};

timer(() => {
  console.log('hello world');
  timer(() => {
    console.log('hello world');
    timer(() => {
      console.log('hello world');
    });
  });
});
