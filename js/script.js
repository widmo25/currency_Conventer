{
    const welcome = () => {
        console.log("Witaj wariacie :D");
    }
    welcome();
    const calculateResult = (quantity, currency) => {

        const eurRate = 4.46;
        const uhaRate = 0.15;
        const usdRate = 3.99;
        switch (currency) {
            case "EUR":
                return quantity / eurRate;

            case "UHA":
                return quantity / uhaRate;

            case "USD":
                return quantity / usdRate;
        }

    }

    const updateResaultText = (quantity, currency) => {
        const results = document.querySelector(".js-results");
        const result = calculateResult(quantity, currency);
        results.innerHTML = `za ${quantity} zł otrzymamy ${result.toFixed(2)} ${currency}`;
    }

    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const quantityElement = document.querySelector(".js-quantity");
            const currencyElement = document.querySelector(".js-currency");
            const currency = currencyElement.value;
            const quantity = +quantityElement.value;
            updateResaultText(quantity, currency)
        })
    }
    init();
}