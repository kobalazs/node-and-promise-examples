const timer = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello World'), 1000);
  });
};

const timers = async () => {
  const hello1 = await timer();
  const hello2 = await timer();
  return Promise.resolve(`${hello1} ${hello2}`);
};

timers().then(hellos => console.log(hellos));
