const {app} = require('./Servers/ionnllc')
const {con} = require('./Servers/DBserver')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const PORT = process.env.PORT

app.listen(PORT || 6000,()=>{
      console.log('Server is Online')
})