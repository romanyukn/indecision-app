const square = function(x) {
  return x * x;
};

// const squareArrow = (x) => {
//   return x * x;
// };

const squareArrow = (x) => x * x;

console.log(square(8));


// const getFirstName = (longName) => {
//   const firstName = longName.split(' ')[0];
//   return firstName;
// }

const getFirstName = (longName) => longName.split(' ')[0];

console.log(getFirstName('Mike Smith'));