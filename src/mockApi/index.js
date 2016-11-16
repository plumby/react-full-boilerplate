export const generateRandomNumber = () => {
  const delay=Math.floor((Math.random() * 2000) + 1)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.floor((Math.random() * 10) + 1));
    }, delay);
  });
}
