import users from './data.js';
const calculateAverageAge = (users) => {
  if (users.length === 0) return 0;

  const totalAge = users.reduce((sum, users) => sum + users.age, 0);
  return totalAge / users.length;
};

const averageAge = calculateAverageAge(users);
console.log(`Average age of persons: ${averageAge}`);