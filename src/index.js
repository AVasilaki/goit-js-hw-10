import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('select');
const inform = document.querySelector('div');

fetchBreeds()
  .then(data => select.insertAdjacentHTML('beforeend', createMarckup(data)))
  .catch();

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
