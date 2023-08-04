const celsiusDiv = document.getElementById('celsius');
const fahrenheitDiv = document.getElementById('fahrenheit');
const kelvinDiv = document.getElementById('kelvin');

const inputTempC = document.getElementById('inputTempC');
inputTempC.addEventListener('input', updateTemperatures1);

const inputTempF = document.getElementById('inputTempF');
inputTempF.addEventListener('input', updateTemperatures2);

const inputTempK = document.getElementById('inputTempK');
inputTempK.addEventListener('input', updateTemperatures3);

function updateTemperatures1() {
    const tempCelsius = parseFloat(inputTempC.value);

    if (!isNaN(tempCelsius)) {
        const fahrenheitValue = (tempCelsius * 9/5) + 32;
        const kelvinValue = tempCelsius + 273.15;

        displayTemperatures(tempCelsius, fahrenheitValue, kelvinValue);
    } else {
        displayError();
    }
}

function updateTemperatures2() {
    const tempFahrenheit = parseFloat(inputTempF.value);

    if (!isNaN(tempFahrenheit)) {
        const celsiusValue = (tempFahrenheit - 32) * (5/9);
        const kelvinValue = celsiusValue + 273.15;

        displayTemperatures(celsiusValue, tempFahrenheit, kelvinValue);
    } else {
        displayError();
    }
}

function updateTemperatures3() {
    const tempKelvin = parseFloat(inputTempK.value);

    if (!isNaN(tempKelvin)) {
        const celsiusValue = tempKelvin - 273.15;
        const fahrenheitValue = (celsiusValue * 9/5) + 32;

        displayTemperatures(celsiusValue, fahrenheitValue, tempKelvin);
    } else {
        displayError();
    }
}

function displayTemperatures(celsius, fahrenheit, kelvin) {
    celsiusDiv.textContent = `${celsius.toFixed(2)} °C`;
    fahrenheitDiv.textContent = `${fahrenheit.toFixed(2)} °F`;
    kelvinDiv.textContent = `${kelvin.toFixed(2)} K`;
}

function displayError() {
    celsiusDiv.textContent = '---';
    fahrenheitDiv.textContent = '---';
    kelvinDiv.textContent = '---';
}


