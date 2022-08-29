let loadContries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayContrirs(data));
}
let displayContrirs = contries => {
    for (const contry of contries) {
        console.log(contry)
        let loadContry = document.getElementById('load-contry');
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="card mx-auto my-3" style="width: 18rem;height: 24rem;">
            <img src="${contry.flags.png}" class="card-img-top" alt="..." style="height:10rem;">
                <div class="card-body" style="margin: 0;">
                    <h5 class="card-title">Contry Name : ${contry.name.common}</h5>
                    <h6 class="card-text">Capital : ${contry.capital[0]}</h6>
                    <p class="card-text">Population : ${contry.population}</p>
                    <p class="card-text">Time zones : ${contry.timezones[0]}</p>
                    <p class="card-text">Continent : ${contry.continents[0]}</p>
                </div>
        </div>  
        `
        loadContry.appendChild(div);
    }
}

loadContries();