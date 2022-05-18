const path = require('path');
const {token} = require(path.join(__dirname, 'config.json')); // настройки сервера
const TelegramApi = require('node-telegram-bot-api')
const fetch = require('node-fetch')

const bot = new TelegramApi(token, {polling: true})

start()

async function start() {

  bot.setMyCommands([
    {command: '/start', description: 'Начальное приветствие'},
    {command: '/info', description: 'Получить информацию'},
  ])
  
  bot.on('message', async msg => {
    const text = msg.text
    const chatId = msg.chat.id
    const first_name = msg.from.first_name || ''
    const last_name = msg.from.last_name || ''
  
    if (text === '/start') {
      return bot.sendMessage(chatId, `
        Добро пожаловать ${first_name} ${last_name} в бот компании Гринавто.\n
        Введите артикул по которому хотите получить информацию.
        `)
    }

    if (text === '/info') {
      return bot.sendMessage(chatId, `Ты написал мне ${text}`)
    }
    const result = await postArticle(text)
    if (typeof result != 'object') {
      return bot.sendMessage(chatId, 'Я вас не понимаю. Попробуйте еще раз.')
    }
    let keys = result.data.map(item => {
      return [{text: `${item.article_name} - ${item.brand}`, callback_data: JSON.stringify({article: item.article, brand: item.brand})}]
    })
    const articleOption = {
      reply_markup: JSON.stringify({
        inline_keyboard: keys
      })
    }
    return bot.sendMessage(chatId, 'Выберете интересующий кросс', articleOption)
  })
  
  bot.on('callback_query', async msg => {
    const data = JSON.parse(msg.data)
    const chatId = msg.message.chat.id
    const result = await postArticleBrand(data.article, data.brand)
    let info = ''
    info = info + 'Точные:\n'
    result.data.definite.forEach(el_article => {
      el_article.data.retail.forEach(el_cross => {
        info = info + `${el_cross.article} - ${el_cross.brand} - ${el_cross.product}\n`
      })
      el_article.data.stock.forEach(el_cross => {
        info = info + `${el_cross.article} - ${el_cross.brand} - ${el_cross.product}\n`
      })
      el_article.data.partner.forEach(el_cross => {
        info = info + `${el_cross.article} - ${el_cross.brand} - ${el_cross.product}\n`
      })
    });
    
    info = info + 'Аналоги:\n'
    result.data.equivalent.forEach(el_article => {
      
      el_article.data.retail.forEach(el_cross => {
        info = info + `${el_cross.article} - ${el_cross.brand} - ${el_cross.product}\n`
      })
      el_article.data.stock.forEach(el_cross => {
        info = info + `${el_cross.article} - ${el_cross.brand} - ${el_cross.product}\n`
      })
      el_article.data.partner.forEach(el_cross => {
        info = info + `${el_cross.article} - ${el_cross.brand} - ${el_cross.product}\n`
      })
    });
    return bot.sendMessage(chatId, info)
  })
}

async function postArticle(template) {
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

async function postArticleBrand(article, brand) {
  try {
    const response = await fetch(`http://api.grinavto.ru:3000/api/v1/article`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({"command": "articles-brand-search-v2", article, brand})
    })
    return response.json()  
  } catch (err) {
    return Promise.reject(err)
  }
}