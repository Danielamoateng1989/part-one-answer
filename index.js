const express = require('express');
const app = express();



app.set('view engine', 'pug')

app.get('/', (req, res) => {
res.render('index')
})




app.all('*', (req, res) => {
    res.sendStatus(404)
})

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log('listening on port ' + port);
})