import debounce from 'lodash.debounce';
import '../styles.css';
import countryCard from '../templates/country-card.hbs';
import countryList from '../templates/country-list.hbs';

import fetchCountry from './fetchCountries.js';

import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
    inputField: document.querySelector('.input-field'),
    countryCardBox: document.querySelector('.country-card')
}


refs.inputField.addEventListener('input', debounce(getCountryData, 500));

function getCountryData(e) {
    if (e.target.value) {
        fetchCountry(refs.inputField.value).then(data => {
        
            if (data.length > 5) {
                refs.countryCardBox.innerHTML = '';
            error({ text: "Занадто багато варіантів. Введіть більш срецифічний запит." }); 
         
        }
        
            else if (data.length > 2 & data.length < 5) {
                refs.countryCardBox.innerHTML = '';
            const cardMarckupList = countryList(data)
            refs.countryCardBox.insertAdjacentHTML('afterbegin', cardMarckupList);
           
        }
            else {
                refs.countryCardBox.innerHTML = '';
            const cardMarckup = countryCard(data[0]);
            refs.countryCardBox.insertAdjacentHTML('afterbegin', cardMarckup);
            
        }
    });
    }
      
}