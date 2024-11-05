require('dotenv').config();
require('./helpers/init_mongodb');
const express = require ('express');
const studentRoute = require('./routes/studentRoute');
const courseRoute = require('./routes/courseRoute');
const userRoute = require('./routes/userRoute');
const cors = require('cors')
// const helmet = require('helmet')
const app = express();

const corOPtions  ={
    origin: 'http://localhost:3000'
}
app.use(cors(corOPtions))

app.use(express.json())
app.use(studentRoute);
app.use(courseRoute);
app.use(userRoute);



app.use((req, res, next)=>{
    const err = new Error("Not Found");
    err.status = 404
    next(err)
})

// app.use(cors({
//     credentials: true, //allow credentials
//     origin: [
//         'http://localhost:3000'
//     ]
// }));



app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    })
})

app.listen(process.env.port || 4000, function() {
    console.log('Now listening for request on: http://localhost:4000');   
});


