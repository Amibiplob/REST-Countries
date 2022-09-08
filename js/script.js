let loadContries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayContrirs(data));
}
let displayContrirs = contries => {
    for (const country of contries) {
      console.log(country)
        let loadcountry = document.getElementById('load-country');
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="card mx-auto my-3" style="width: 18rem;height: 28rem;">
            <img src="${country.flags.png}" class="card-img-top" alt="..." style="height:10rem;">
                <div class="card-body" style="padding-bottom: 0;!important">
                    <h5 class="card-title">Country : ${country.name.common}</h5>
                    <h6 class="card-text">Offical Name : ${country.name.official}</h6>
                    <h6 class="card-text">Capital : ${country.capital[0]}</h6>
                    <h6 class="card-text">Population : ${country.population}</h6>
                    <h6 class="card-text">Time Zone: ${country.timezones[0]}</h6>
                    <h6 class="card-text">Continents : ${country.continents[0]}</h6>
                    <h6 class="card-text">Area : ${country.area}</h6>
                    <h6 class="card-text">Region : ${country.region}</h6>
                    </div>
        </div>  
        `
        loadcountry.appendChild(div);
    }
}


loadContries();

function clock() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let am_pm = "AM";
    if (h === 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        am_pm = "PM"
    }
    let time = document.getElementById('time');
    time.innerHTML = `
    ${h}:${m}:${s} ${am_pm}
    `
    setTimeout(() => {
        clock();
    }, 1000);
}
clock();