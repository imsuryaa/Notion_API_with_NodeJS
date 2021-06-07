const express = require('express')
const getEvents = require('./servcies/notion')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.static('public'))

app.get('/events', async(req, res) => {
    const events = await getEvents()
    res.json(events)
})

app.listen(PORT, console.log(`Server started at ${PORT}`))