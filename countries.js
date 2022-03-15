const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    console.log(countries[2]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// step 01
// const getCountryHTML = country => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `;
// }

// step 02
// const getCountryHTML = country => {
//     const { name, flags } = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `;
// }

// step 03
const getCountryHTML = ({name, flags}) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <img src="${flags.png}">
        </div>
    `;
}

loadCountries();