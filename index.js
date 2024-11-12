import server from './src/app.js'
import { connect } from './src/db.js'

const {PORT}= process.env

connect.sync({force:false}).then(()=>{

    server.listen(PORT, ()=>{
        console.log(`escuchando en el puerto ${PORT}`)
    })
})