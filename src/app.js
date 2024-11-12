import express,{urlencoded,json} from 'express'
import routes from './routes/index.js'
import cors from 'cors'

const server = express()

const corsOptions = {
    origin: '*',
    methods:['GET','POST'],
    allowedHeaders:['Content-Type', 'Authorization']
}

server.use(urlencoded({extended:true,limit:'50mb'}))
server.use(json({limit:'50mb'}))
server.use(cors(corsOptions))

server.use('/api/', routes)

export default server