describe("проверка функции", () => {
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
});
