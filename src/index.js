import axios from 'axios';
import { fetchBreeds } from './cat-api';

// axios.defaults.headers.common['x-api-key'] =
//   'live_0JtGVSBqjiasWh5nfxpRM1Q6z3bcX9aPfbx9j9i4imJDYV6mB8JMAUyzAvBAq9oV';
const select = document.querySelector('select');
// axios
//   .get('https://api.thecatapi.com/v1/breeds')
//   .then(function (response) {
//     console.log(response.data);
//     select.insertAdjacentHTML('beforeend', createMarckup(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {});
fetchBreeds();
function createMarckup(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option> `)
    .join('');
}
select.addEventListener('change', handlerCat);
function handlerCat(evt) {
  const cat = evt.currentTarget.value;
  console.log(cat);
}

export { createMarckup, select };
