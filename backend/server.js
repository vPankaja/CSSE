import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'

// Routes
import UserRoutes from './routes/userRoutes.js'
import trMngerRoutes from './routes/trManagerRoutes.js'
import passengerRoutes from './routes/passengerRoutes.js'

dotenv.config()

//connect database
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

// Calling Routes
app.use("/api/user", UserRoutes)
app.use('/api/trMnger', trMngerRoutes)
app.use('/api/passenger', passengerRoutes)



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