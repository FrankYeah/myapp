const express = require('express');
const fs = require('fs');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('hello, My Server!')
});

app.get('/getData', (req, res) => {   
    const result = ((1 + Number(req.query.number)) *Number(req.query.number))/2;
    console.dir(result);    
    res.send(`${result}`);
});

app.get('/getData', (req, res) => {
    res.send('Wrong Parameters')
});

app.get('/test.html', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});

app.listen(3000, ()=>{
    console.log('the app is running on localhost:3000');
})