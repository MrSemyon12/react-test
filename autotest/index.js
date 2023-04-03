function sum(s) {
  let regex = /[A-Za-z]+/;
  const arr = s.split(regex).slice(1);
  if (arr.length == 0) throw Error("wrong format");

  regex =
    /^[1-9][0-9]{0,2}(\.[0-9]{3})*(\.(?:[0-9][1-9]|[1-9][0-9]))?$|^0(\.(?:[0-9][1-9]|[1-9][0-9]))?$/;

  const newArr = arr.map((el) => {
    if (!regex.test(el)) throw Error("wrong format");

    if (el.length <= 4) {
      return Number(el);
    }

    if (el[el.length - 3] === ".") {
      return Number(
        el.slice(0, el.length - 3).replaceAll(".", "") +
          "." +
          el.slice(el.length - 2)
      );
    }
    return Number(el.replaceAll(".", ""));
  });

  return newArr.reduce((ac, val) => ac + val, 0);
}
