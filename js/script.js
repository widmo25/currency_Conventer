console.log("Witaj wariacie :D");
let form = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let quantityElement = document.querySelector(".js-quantity");
let results = document.querySelector(".js-results");

let eurRate = 4.46;
let uhaRate = 0.15;
let usdRate = 3.99;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let currency = currencyElement.value;
    let quantity = quantityElement.value;
    let result;
    switch (currency) {
        case "EUR":
            result = quantity / eurRate;
            break;

        case "UHA":
            result = quantity / uhaRate;
            break;

        case "USD":
            result = quantity / usdRate;
            break;

    }
    results.innerHTML = `za ${quantity} zł otrzymamy ${result.toFixed(2)} ${currency}`;
})


