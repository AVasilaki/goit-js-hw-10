function fetchBreeds() {
  return fetch(
    'https://api.thecatapi.com/v1/breeds?api_key=live_0JtGVSBqjiasWh5nfxpRM1Q6z3bcX9aPfbx9j9i4imJDYV6mB8JMAUyzAvBAq9oV'
  );
}

export { fetchBreeds };
