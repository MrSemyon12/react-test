const s = "Milk34Sweets3.67Choc1244.538.04Dsdw0.99kkkk0.09";
console.log(s);

let regex = /[A-Za-z]+/;
const arr = s.split(regex).slice(1);
regex =
  /^[1-9]+[0-9]{0,2}(.[0-9]{3})*(.(?:[0-9][1-9]|[1-9][0-9]))?$|^0(.[0-9]{2})?$/;

const newArr = arr.map((el) => {
  if (regex.test(el)) throw Error("wrong format");

  if (el.match(regex) === null) {
  }

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
