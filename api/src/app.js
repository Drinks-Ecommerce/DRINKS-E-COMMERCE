import express from "express"

import productsRouter from './routes/products.routes.js'

const app = express()

//middlewares
app.use(express.json());
app.use(productsRouter)




export default app;
