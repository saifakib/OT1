require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const Routes = require('./routes')


const app = express();
const mongo_uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.e3ps1.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use('/', Routes)


mongoose
    .connect(mongo_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server Listen On ${process.env.PORT}`)
        })
    })
    .catch(err => {
        console.log(err.message)
    })



