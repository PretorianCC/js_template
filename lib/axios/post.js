const axios = require('axios')
const instance = axios.create({
  baseURL: "http://api.grinavto.ru:3000/api/v1/",
  param
})

const template = '500170'
const data = getPost(template);

async function getPost(template) {
  try {
    const res = await instance.post('article', { command: "articles-search-v2", template })
    return console.log(res.data)
  } catch(err) {
    return console.log(err.message)
  }  
}
