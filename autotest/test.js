describe("Проверка функции sum", () => {
  describe("Ожидание равенства:", () => {
    it("Milk34Sweets3.67Choc38.04Dsdw0.99kkkk0.09", () => {
      assert.equal(sum("Milk34Sweets3.67Choc38.04Dsdw0.99kkkk0.09"), 76.79);
    });

    it("Milk34Sweets3.67Choc12.538.04Dsdw0.99kkkk0.09", () => {
      assert.equal(
        sum("Milk34Sweets3.67Choc12.538.04Dsdw0.99kkkk0.09"),
        12576.79
      );
    });

    it("Milk1Sweets3Choc12Dsdw1.000.000kkkk0", () => {
      assert.equal(sum("Milk1Sweets3Choc12Dsdw1.000.000kkkk0"), 1000016);
    });

    it("a1b2c3d4e5f6.06", () => {
      assert.equal(sum("a1b2c3d4e5f6.06"), 21.06);
    });

    it("apple0.01apple0.10", () => {
      assert.equal(sum("apple0.01apple0.10"), 0.11);
    });

    it("a234b1.544c149.000.345.33d0.45e5f123.06", () => {
      assert.equal(
        sum("a234b1.544c149.000.345.33d0.45e5f123.06"),
        149002251.84
      );
    });
  });

  describe("Ожидание исключения:", () => {
    it("abc1234.0003", () => {
      chai.expect(() => sum("abc1234.0003")).to.throw();
    });

    it("45242.01", () => {
      chai.expect(() => sum("45242.01")).to.throw();
    });

    it("fff01213", () => {
      chai.expect(() => sum("fff01213")).to.throw();
    });

    it("apple.333", () => {
      chai.expect(() => sum("apple.333")).to.throw();
    });

    it("apple3.33.11", () => {
      chai.expect(() => sum("apple3.33.11")).to.throw();
    });

    it("apple12.00", () => {
      chai.expect(() => sum("apple12.00")).to.throw();
    });

    it("apple0.1234", () => {
      chai.expect(() => sum("apple0.1234")).to.throw();
    });

    it("apple1.2", () => {
      chai.expect(() => sum("apple1.2")).to.throw();
    });

    it("apple0.00", () => {
      chai.expect(() => sum("apple0.00")).to.throw();
    });
  });
});
