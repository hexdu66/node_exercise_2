const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Example app listening on port 8080!')
})

app.use(express.static('public'))

app.get('/greet', function (req, res) {
    var myGreetings = new Array();

    myGreetings[0] = "Hi !";
    myGreetings[1] = "Hello !";
    myGreetings[2] = "Bonjour !";
    myGreetings[3] = "Hola !";
    myGreetings[4] = "Hei hei !";
    myGreetings[5] = "Hallo !";
    myGreetings[6] = "Salut !";

   res.send(myGreetings[Math.floor((Math.random() * 6))]);
})

app.get('/greet/:id', function (req, res) {
    var myGreetings = new Array();

    myGreetings[0] = "Hi !";
    myGreetings[1] = "Hello !";
    myGreetings[2] = "Bonjour !";
    myGreetings[3] = "Hola !";
    myGreetings[4] = "Hei hei !";
    myGreetings[5] = "Hallo !";
    myGreetings[6] = "Salut !";

    res.send(myGreetings[Math.floor((Math.random() * 6))] + " " +req.params.id);
})