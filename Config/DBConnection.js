import mongoose from 'mongoose'
const config = require('../Config/config.js')
const configuration = config.default[process.env.NODE_ENV];

const db = configuration.DB;

const MONGO_URL = `mongodb://${db.DB_HOST}:${db.DB_PORT}/${db.DB_NAME}`;

const DBConnect = async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        console.log("DB connected")
        
    } catch (error) {
        console.log("error while connecting to DataBase")
    }
}

module.exports = DBConnect;
