document.addEventListener("DOMContentLoaded", function() {
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const amountInput = document.getElementById('amount');
    const convertBtn = document.getElementById('convertBtn');
    const switchBtn = document.getElementById('switchBtn');
    const resultDiv = document.getElementById('result');

    const apiKey = 'YOUR_API_KEY'; 
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
        .then(response => response.json())
        .then(data => {
            const currencies = data.supported_codes;
            currencies.forEach(currency => {
                const option1 = document.createElement('option');
                const option2 = document.createElement('option');
                option1.textContent = currency;
                option1.value = currency;
                option2.textContent = currency;
                option2.value = currency;
                fromCurrencySelect.appendChild(option1);
                toCurrencySelect.appendChild(option2);
            });
        })
        .catch(error => console.error('Error fetching currencies:', error));

    convertBtn.addEventListener('click', function() {
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        const amount = amountInput.value;

        if (fromCurrency === toCurrency) {
            displayResult('Cannot convert the same currency.');
            return;
        }

        fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`)
            .then(response => response.json())
            .then(data => {
                if (data.result === 'error') {
                    throw new Error(data['error-type']);
                }
                const conversionRate = data.conversion_rate;
                const convertedAmount = (amount * conversionRate).toFixed(2);
                const resultText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
                displayResult(resultText);
            })
            .catch(error => {
                console.error('Error fetching conversion rate:', error);
                displayResult('Failed to convert. Please try again later.');
            });
    });

    switchBtn.addEventListener('click', function() {
        const temp = fromCurrencySelect.value;
        fromCurrencySelect.value = toCurrencySelect.value;
        toCurrencySelect.value = temp;
    });

    function displayResult(message) {
        resultDiv.textContent = message;
        resultDiv.style.display = 'block';
    }
});