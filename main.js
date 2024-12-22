const tyyppi = document.querySelector('#valitse');
const btn = document.querySelector('#btn');
btn.addEventListener('click', laske);

function laske(event) {
    event.preventDefault();
    let lampo = document.getElementById('lampo').value;
    let radio = document.querySelector('input[name="muunnin"]:checked');
    if (lampo.length < 1 && radio == null) {
        document.getElementById('tulosta').innerHTML = 'Anna lämpötila ja valitse desimaali!'
        return
    }
    if (lampo.length < 1) {
        document.getElementById('tulosta').innerHTML = 'Anna lämpötila!'
        return
    }
    if (isNaN(+lampo)) {
        document.getElementById('tulosta').innerHTML = 'Lämpötilan täytyy olla numero!'
        return
    }
    if (radio) {
        if (tyyppi.selectedIndex === 0) {
            if (+lampo < -273.15) {
                document.getElementById('tulosta').innerHTML = 'Lämpötila ei voi olla pienempi kuin -273.15 Celsius!'
                return
            }
            celsiusToFahrenheit(+radio.value, +lampo)
        };
        if (tyyppi.selectedIndex === 1) {
            if (+lampo < -459.67) {
                document.getElementById('tulosta').innerHTML = 'Lämpötila ei voi olla pienempi kuin -459.67 Fahrenheit!'
                return
            }
            fahrenheitToCelsius(+radio.value, +lampo)
        };
    } else {
        document.getElementById('tulosta').innerHTML = 'Valitse desimaali!'
        return
    }
};

function celsiusToFahrenheit(desimaali, lampo) {
    let tulo = lampo * 1.8 + 32;
    document.getElementById('tulosta').innerHTML = tulo.toFixed(desimaali);
};

function fahrenheitToCelsius(desimaali, lampo) {
    let tulo = (lampo - 32) /1.8;
    document.getElementById('tulosta').innerHTML = tulo.toFixed(desimaali);
};
