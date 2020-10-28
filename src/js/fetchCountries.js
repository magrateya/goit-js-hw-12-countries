
// fetch('https://restcountries.eu/rest/v2/name/ukraine').then(response => {
//     return response.json();
// }).then(country => { console.log(country); }).catch(error => { console.log(error); });

function fetchCountry(search) {
    return fetch(`https://restcountries.eu/rest/v2/name/${search}`).then(response => response.json()).catch(error => { console.log(error); });
}
export default fetchCountry;