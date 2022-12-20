import express from "express"
octa
import productsRouter from './routes/products.routes.js'

const app = express()

//middlewares
app.use(express.json());
app.use(productsRouter)





