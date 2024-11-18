require('@babel/register')
require('@babel/polyfill')
require('dotenv/config')
require('../Config/DBConnection.js')();
const { log } = require('console');
const config = require('../Config/config.js')
const app = require('../App').default
const http = require('http')

const configuration = config.default[process.env.NODE_ENV]
const PORT = configuration.API_PORT

const server = http.createServer(app)
server.listen(PORT)

server.on("listening",()=>{
    console.log(`connected to server ${PORT}` )
})