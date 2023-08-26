import axios from 'axios';
import { createMarckup, select } from '.';
axios.defaults.headers.common['x-api-key'] =
  'live_0JtGVSBqjiasWh5nfxpRM1Q6z3bcX9aPfbx9j9i4imJDYV6mB8JMAUyzAvBAq9oV';
// const select = document.querySelector('select');
function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(function (response) {
      console.log(response);
      select.insertAdjacentHTML('beforeend', createMarckup(response.data));
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
}

export { fetchBreeds };
