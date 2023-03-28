function power(a, b) {
  if (b < 0 || (b * 10) % 10 != 0) {
    return NaN;
  }

  res = a;
  for (let pow = 0; pow < b - 1; pow++) {
    res *= a;
  }
  return res;
}
