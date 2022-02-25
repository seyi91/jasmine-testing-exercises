
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 100000, years: 24, rate: 5}
  expect(calculateMonthlyPayment(values)).toEqual('238.76')
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 24000, years: 5, rate: 10}
  expect(calculateMonthlyPayment(values)).toEqual('509.93')
});

