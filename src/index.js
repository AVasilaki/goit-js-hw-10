import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('select');
const inform = document.querySelector('div');
const loader = document.querySelector('.loader');
const err = document.querySelector('.error');
// select.classList.remove('js-select-hidden');
fetchBreeds()
  .then(data => {
    select.insertAdjacentHTML('beforeend', createMarckup(data));
    loader.classList.add('js-loader-hidden');
    select.classList.remove('js-select-hidden');
  })
  // .catch(error.classList.remove('js-error-hidden'))
  .catch(function (error) {
    if (error.response) {
      // Запит було зроблено, і сервер відповів кодом стану, який
      // виходить за межі 2xx
      err.classList.remove('js-error-hidden');
      loader.classList.add('js-loader-hidden');
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // Запит було зроблено, але відповіді не отримано
      // `error.request` - це екземпляр XMLHttpRequest у браузері та екземпляр
      // http.ClientRequest у node.js
      err.classList.remove('js-error-hidden');
      loader.classList.add('js-loader-hidden');
      console.log(error.request);
    } else {
      // Щось сталося під час налаштування запиту, що викликало помилку
      console.log('Error', error.message);
      err.classList.remove('js-error-hidden');
      loader.classList.add('js-loader-hidden');
    }
    console.log(error.config);
  })
  .finally(loader.classList.remove('js-loader-hidden'));

function createMarckup(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option> `)
    .join('');
}
select.addEventListener('change', handlerCat);
function handlerCat(evt) {
  const cat = evt.currentTarget.value;
  inform.innerHTML = '';
  fetchCatByBreed(cat)
    .then(data => inform.insertAdjacentHTML('beforeend', catMarkup(data)))
    .catch();
}

function catMarkup(arr) {
  return arr
    .map(
      ({
        url,
        breeds: {
          0: { name, description, temperament },
        },
      }) => `<img class="img" src="${url}" alt="" width ='300px'/>
      <p class="name">${name}</p>
      <p class="description">${description}</p>
      <p class="temperament">${temperament}</p>`
    )
    .join('');
}
