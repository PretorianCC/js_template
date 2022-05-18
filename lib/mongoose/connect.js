const mongoose = require('mongoose')

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/testAuth', {useNewUrlParser: true})
  } catch(err) {
    console.log(err)
  }
}

start()