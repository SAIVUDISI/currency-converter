const exchangeRates = {
  USD: { INR: 83.25, EUR: 0.92, GBP: 0.78 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0094 },
  EUR: { USD: 1.09, INR: 90.2, GBP: 0.85 },
  GBP: { USD: 1.28, INR: 106.3, EUR: 1.17 }
};

const fromSelect = document.getElementById("fromCurrency");
const toSelect = document.getElementById("toCurrency");
const resultBox = document.getElementById("result");

const currencies = Object.keys(exchangeRates);

function populateDropdowns() {
  currencies.forEach(curr => {
    const option1 = new Option(curr, curr);
    const option2 = new Option(curr, curr);
    fromSelect.appendChild(option1);
    toSelect.appendChild(option2);
  });
  fromSelect.value = "USD";
  toSelect.value = "INR";
}

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = fromSelect.value;
  const to = toSelect.value;

  if (isNaN(amount) || amount <= 0) {
    resultBox.textContent = "Please enter a valid amount.";
    return;
  }

  if (from === to) {
    resultBox.textContent = `Converted Amount: ${amount.toFixed(2)} ${to}`;
    return;
  }

  const rate = exchangeRates[from][to];
  if (rate) {
    const converted = amount * rate;
    resultBox.textContent = `Converted Amount: ${converted.toFixed(2)} ${to}`;
  } else {
    resultBox.textContent = "Conversion not available.";
  }
}

populateDropdowns();
