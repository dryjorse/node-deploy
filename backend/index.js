const express = require('express')
const PORT = process.env.PORT || 3001
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('Hello users!')
})

app.get('/posts', (reg, res) => {
    res.send({
      count: 55,
      name: 'post'
    })
})

app.listen(PORT, () => {
    console.log(`Server starting in port ${PORT}`);
})