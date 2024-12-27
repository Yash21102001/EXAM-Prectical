const express = require('express')
const app = express();
const {db} = require('./config/database') 
const path = require('path');



const port = 8081;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname + '/assets')));
app.use('/uploads', express.static(path.join(__dirname + '/uploads')))
app.use(express.urlencoded({ extended: true }))


app.use('/', require('./routers'));

app.listen(port, (err)=>{
    if (err) {
        console.log(err);
        return false;
    }
    db();
    console.log("server Start \nhttp://localhost:"+ port);
})
