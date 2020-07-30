const express = require('express')

const app = express()
const port = 3333

//Controllers
const foodCtrl = require('./controllers/foodController')

//Middleware
app.use(express.json())


//Endpoints
// http://localhost:3333/api/food
app.get('/api/food', foodCtrl.getFood)
app.delete('/api/food/:id', foodCtrl.deleteFood)

app.listen(port, () => console.log(`Listening on ${port}`))