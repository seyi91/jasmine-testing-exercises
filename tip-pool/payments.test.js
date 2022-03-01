describe("Payments test", function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 15;
    })

    it("should add a payment object to allPayments on submitPaymentInfo()", function(){
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual("100");
        expect(allPayments['payment' + paymentId].tipAmt).toEqual("15");
    });

    it("should not add a new payment with negative or empty inputs", function(){
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it("should update paymentTable on appendPaymentTable()", function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$15');
        expect(curTdList[2].innerText).toEqual('15%');
    });

    it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
            billAmt: '100',
            tipAmt: '15',
            tipPercent: 15,
        }

        expect(createCurPayment()).toEqual(expectedPayment);
    });

    it('should not create payment with empty input on createCurPayment()', function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = ''; 
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
      });
})