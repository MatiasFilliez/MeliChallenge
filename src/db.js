import { configDotenv } from 'dotenv';
import mutanModel from './models/isMutanModel.js'
import statsModel from './models/statsModel.js'
import { Sequelize } from 'sequelize'

configDotenv()
const {
  DATABASE_URL
} = process.env;

const sequelize = new Sequelize(`${DATABASE_URL}`, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Esto es importante para evitar errores de certificado SSL
    }
  }
}

);

const modelDefined = [
  mutanModel,
  statsModel
]

modelDefined.forEach((model) => model(sequelize))

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Dna, Stats } = sequelize.models

const connect = sequelize

export {
  connect,
  Stats,
  Dna
}