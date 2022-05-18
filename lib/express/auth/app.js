const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRoute')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/testAuth', {useNewUrlParser: true})
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    })
  } catch(err) {
    console.log(err)
  }
}

start()
