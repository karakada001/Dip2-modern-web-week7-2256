const express = require('express')
const app = express()
const path = require('path')

const creatPath = (page) =>path.resolve(__dirname, 'views', `${page}.html`)
//http://localhost:3000/
app.get('/',(req,res) =>{
    res.sendFile(creatPath('index'));
});

app.get('/contacts', (req,res) => {
    res.sendFile(creatPath('contacts'))
})

app.get('/about-us',(req,res) => {
    res.redirect('/contacts')

})

app.use((req,res) => {
    res.status(400),res.sendFile(creatPath("error"))
})


const host = "localhost";
const port = 3000;
app.listen(port, (error) => {
    error
    ? console.log(error)
    : console.log(`Server is running at http://${host}:${port}`);
});