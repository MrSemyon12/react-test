const s = "Milk34Sweets3.67Choc12.538.04Dsdw0.99kkkk0.09";
console.log(s);

const regex = /[A-Za-z]+/;

const arr = s.split(regex).slice(1);
const newArr = arr.map((el) => {
  if (el.length <= 4) {
    return Number(el);
  }

  if (el[el.length - 3] === ".") {
    return Number(
      el.slice(0, el.length - 3).replace(".", "") +
        "." +
        el.slice(el.length - 2)
    );
  }
  return Number(el.replace(".", ""));
});

console.log(arr);
console.log(newArr.reduce((ac, val) => ac + val, 0));
