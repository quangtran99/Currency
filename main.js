const exchangerate = 23208;

function ExchangeVND() {
let inputUSD = prompt("USD you want to exchange");
if (isNaN(parseInt(inputUSD))=== true) {
  console.log("Error: number only");
  return;
} 


console.log(
  "Money received",  formatCurrency("VND",inputUSD * exchangerate)
)
}
//

const VNexchangeRate = 23000;

function ExchangeUSD() {
let inputVND = prompt("VND you want to exchange")
if (isNaN(parseInt(inputVND))=== true) {
  console.log("Error: number only");
  return;
} 

console.log(
  "Money receiverd", formatCurrency("USD",(inputVND / VNexchangeRate).toFixed(2))
)
}
//
welcome()

function welcome() {
let inputType = prompt("What type of currency you want to change?")

if (inputType=="usd") {
ExchangeVND()
} else if (inputType=="vnd"){
  ExchangeUSD()
} else {
  console.log("We haven't supported this currency convert.")
  return welcome();
}
}

//

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}

//
