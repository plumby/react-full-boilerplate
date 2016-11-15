export const generateRandomNumber = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor((Math.random() * 10) + 1));
    }, 1000);
  });
}
