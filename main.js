const tyyppi = document.querySelector('#valitse');
const btn = document.querySelector('#btn');
btn.addEventListener('click', laske);

function laske(event) {
    event.preventDefault();
    console.log(tyyppi.selectedIndex);
    let lampo = document.getElementById('lampo').value;
    let radio = document.querySelector('input[name="muunnin"]:checked');
    if (lampo.length < 1 && radio == null) {
        alert('Anna lämpötila ja valitse desimaali')
        return
    }
    if (lampo.length < 1) {
        alert('Anna lämpötila')
        return
    }
    if (isNaN(+lampo)) {
        alert('Lämpötilan täytyy olla numero')
        return
    }
    if (radio) {
        if (tyyppi.selectedIndex === 0) {
            if (+lampo < -273.15) {
                alert('Lämpötila ei voi olla pienempi kuin -273.15 Celsius')
                return
            }
            celsiusToFahrenheit(+radio.value, +lampo)
        };
        if (tyyppi.selectedIndex === 1) {
            if (+lampo < -459.67) {
                alert('Lämpötila ei voi olla pienempi kuin -459.67 Fahrenheit')
                return
            }
            fahrenheitToCelsius(+radio.value, +lampo)
        };
    } else {
        alert('Valitse desimaali')
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
