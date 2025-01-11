import { Sequelize } from "sequelize";
import dotenv   from 'dotenv';

dotenv.config();

export const  Dbconfig = () => {
    const db_host= process.env.DB_HOST as string;
    const db_name= process.env.DB_NAME as string;
    const db_id= process.env.DB_ID as string;
    const db_pass= process.env.DB_PASS as string;
    const sequelize = new Sequelize(db_name, db_id, db_pass, {
        host: db_host,
        dialect: 'mysql', // Change to 'postgres', 'sqlite', or your database type
    });

    sequelize.authenticate()
        .then(() => {
            console.log('Connection to the database has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    return sequelize;
}