const express = require('express')
const app = express()
const port = 8000

app.use(express.json())
var cors = require('cors')
const MailingRoutes = require('./routes/maillngroutes')

app.use('/api',  MailingRoutes)
app.listen(port, () => {
    console.log(`Server listening on Port ${port}`)
})