function getData() {
    fetch("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php")
        .then(response => response.json())
        .then(response => {
            let programista = response;
            let dane = document.createElement('div');
            dane.setAttribute("id", "dane-programisty");
            dane.innerHTML = "Imię: " + programista.imie + "<br>" + "Nazwisko: " + programista.nazwisko + "<br>"
                + "Zawód: " + programista.zawod + "<br>" + "Firma: " + programista.firma;

            document.body.appendChild(dane);
        })
}

let button = document.getElementById('download');
button.onclick = getData;