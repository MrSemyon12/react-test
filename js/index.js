const product1 = {
  name: "Bread",
  amount: 5,
  price: 40,
};

const product2 = {
  name: "Chocolate",
  amount: 6,
  price: 100,
};

const product3 = {
  title: "Milk",
  amount: 2,
  price: 110,
};

const product4 = {
  name: "Pelmeni",
  amount: 7,
  price: 230,
};

const product5 = {
  title: "Mionase",
  amount: 8,
  price: 170,
};

// const arr = [1, [2, 3], [4, [5, 6, 7], 8, [9]], [10, [11, 12, [13, [14]]]]];

// console.log(arr.flat(Infinity));

// function flatten(arr, depth = 1) {
//   if (depth <= 0) return arr;

//   return arr.reduce(
//     (acc, val) =>
//       acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val),
//     []
//   );
// }

// console.log(flatten(arr, 1));

const s = "Milk34Sweets3.67Choc8.04Dsdw0.99kkkk0.09";
console.log(s);

const regex = /[A-Za-z]+/;

const arr = s.split(regex).slice(1);

console.log(arr.reduce((ac, val) => ac + Number(val), 0));
