describe("Проверка функции sum", () => {
  it("Milk34Sweets3.67Choc38.04Dsdw0.99kkkk0.09", () => {
    assert.equal(sum("Milk34Sweets3.67Choc38.04Dsdw0.99kkkk0.09"), 76.79);
  });
  it("Milk34Sweets3.67Choc12.538.04Dsdw0.99kkkk0.09", () => {
    assert.equal(
      sum("Milk34Sweets3.67Choc12.538.04Dsdw0.99kkkk0.09"),
      12576.79
    );
  });
  it("Milk1Sweets3Choc12Dsdw1000000kkkk0", () => {
    assert.equal(sum("Milk1Sweets3Choc12Dsdw1000000kkkk0"), 1000016);
  });
  it("a1b2c3d4e5f6.06", () => {
    assert.equal(sum("a1b2c3d4e5f6.06"), 21.06);
  });
});

describe("НЕ корректные тесты", () => {
  it("abc1234.0003", () => {
    assert.equal(sum("abc1234.0003"), 0);
  });
  it("45242.01", () => {
    assert.equal(sum("45242.01"), 21.06);
  });
  it("fff01213", () => {
    assert.equal(sum("fff01213"), 21.06);
  });
});
