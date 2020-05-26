const express = require ("express")
const cors = require("cors")
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}) )


require("./server/config/mongoose.config")
require("./server/routes/pets.routes")(app)
app.listen(port, () => console.log(`Listening to port ${port}`))