import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'

// Routes



dotenv.config()

//connect database


const app = express()

app.use(cors())
app.use(express.json())

// Calling Routes




if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  
  //create port
  const PORT = process.env.PORT || 8070
  
  app.listen(
    PORT,
    console.log(
      `server running in ${process.env.NODE_ENV} port ${PORT}`
    )
  )