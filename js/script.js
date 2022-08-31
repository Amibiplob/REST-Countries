let loadContries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayContrirs(data));
}
let displayContrirs = contries => {
    for (const country of contries) {
        // console.log(country)
        let loadcountry = document.getElementById('load-country');
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="card mx-auto my-3" style="width: 18rem;height: 22rem;">
            <img src="${country.flags.png}" class="card-img-top" alt="..." style="height:10rem;">
                <div class="card-body" style="padding-bottom: 0;!important">
                    <h5 class="card-title">Country : ${country.name.common}</h5>
                    <h6 class="card-text">Capital : ${country.capital[0]}</h6>
                    <p class="card-text">Population : ${country.population}</p>
                    <button onclick="modal()" type="button" class="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#countryModal">Show More</button>
                </div>
        </div>  
        `
        loadcountry.appendChild(div);
    }
}


fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => displaymodal(data));

let displaymodal = contries => {
    for (const country of contries) {
        // console.log(country)
        let modal = document.getElementById('modal');
        let div = document.createElement('div');
        div.innerHTML = `
<div class="modal fade" id="countryModal" tabindex="-1" aria-labelledby="countryModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
  <div class="modal-content">
    <div class="modal-header d-flex">
      <h5 class="modal-title" id="countryModalLabel">${country.name.common} : </h5>
      <img src="${country.flags.png}" alt="..." class="m-auto" style="width: 2rem;height: 1.5rem;">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
     <p>Capital : ${country.capital[0]}</p>
     <p>Offical Name : ${country.official}</p>
     <p>Population : ${country.population}</p>
     <p>Time Zone: ${country.timezones[0]}</p>
     <p>Continents : ${country.continents[0]}</p>
     <p>Area : ${country.area}</p>
     <p>Region : ${country.region}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>
`
        modal.appendChild(div);
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
   if(h > 12) {
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