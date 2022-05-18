const fetch = require('node-fetch')

async function getPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode1.com/posts/${id}`)
    return response.json()  
  } catch (err) {
    return Promise.reject(err)
  }
}

getPost(1)
  .then(data => console.log(data))
  .catch(err => console.log(err))