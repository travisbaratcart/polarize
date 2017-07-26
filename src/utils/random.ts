export const getRandomNumberOfUsers = (maxUsers: number) => {
  return Math.floor(Math.random() * maxUsers) + 1;
}
