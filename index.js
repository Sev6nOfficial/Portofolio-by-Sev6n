const express = require('express')
const app = express()
const config = require('./config.json')

const port = config.port;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('index',
    {
      config: config
    });
})

app.get('*', (req, res) => {
  res.render('404');
})
app.listen(port, () => {
  console.log(`This WebSite is mainly coded by Sev6n! The Portofolio is UP!`)
})