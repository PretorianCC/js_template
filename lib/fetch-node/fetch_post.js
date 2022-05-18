const fetch = require('node-fetch')

const template = '500170'

!(async function runApp() {
  const result = await post()
  console.log(result)
})()

async function post() {
  try {
    const response = await fetch(`http://api.grinavto.ru:3000/api/v1/article`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({"command": "articles-search-v2", template})
    })
    return response.json()  
  } catch (err) {
    return Promise.reject(err)
  }
}