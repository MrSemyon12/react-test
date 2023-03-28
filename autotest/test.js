describe("положительная степень", () => {
  it("возводит 2 в степень 3", () => {
    assert.equal(power(2, 3), 8);
  });
  it("возводит 5 в степень 2", () => {
    assert.equal(power(5, 2), 25);
  });
});

describe("отрицательная степень", () => {
  it("возводит 2 в степень -3", () => {
    assert.isNaN(power(2, -3));
  });
});

describe("дробная степень", () => {
  it("возводит 2 в степень 1.5", () => {
    assert.isNaN(power(2, 1.5));
  });
});