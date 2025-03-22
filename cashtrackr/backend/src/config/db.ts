import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
dotenv.config()

//Se agrega lo del ssl porque no lo vamos a usar, ya que estamos de manera local
export const db = new Sequelize ( process.env.DATABASE_URL , {

    dialectOptions: {
        ssl: {
            require: false
        }
    }
})