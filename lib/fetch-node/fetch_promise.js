const fetch = require('node-fetch')

// Запрос GET в обертке промиса
function getPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json()) 
}

getPost(1)
  .then(post => console.log(post))
  .catch(err => console.log(err))