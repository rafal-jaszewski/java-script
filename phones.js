const SPENDING_THRESHOLD=2000;
const TAX_RATE=0.08;
const PHONE_PRICE=99.99;
const ACCESSORY_PRICE=9.99;
var bank_balance=1000;
var amount=0;
    function calculateTax(amount) {
    return amount*TAX_RATE;
}
    function formatAmount(amount) {
    return amount.toFixed(2)+"zł";
    }
    function howManyPhones(amount) {
    return amount/(PHONE_PRICE+ACCESSORY_PRICE)
    }
while (amount < bank_balance) {
amount=amount+PHONE_PRICE;
    if (amount < SPENDING_THRESHOLD) {
    amount=amount+ACCESSORY_PRICE;
    }
}
amount=amount + calculateTax(amount);
alert("Kwota do zapłaty: " + formatAmount(amount));
alert("Chcesz kupić telefonów " +howManyPhones(amount));
if (amount > bank_balance) {
alert("Nie możesz kupić tylu telefonów :(");
}