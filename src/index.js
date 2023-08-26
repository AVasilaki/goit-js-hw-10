import { fetchBreeds, fetchCatByBreed } from './cat-api';

const select = document.querySelector('select');
const inform = document.querySelector('div');

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
  fetchCatByBreed(cat);
  // inform.innerHTML = '';
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
export { createMarckup, select, inform, catMarkup };
