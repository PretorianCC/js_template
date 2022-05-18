// Запрос GET
const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.log(error))
