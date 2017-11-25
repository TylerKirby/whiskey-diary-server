import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql';
import Sequelize from 'sequelize';

const app = express();

app.set('port', 3000);

dotenv.config();

const sequelize = new Sequelize(
  '', 
  process.env.USER, 
  process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
         .then(() => console.log('Connection has been successfully established'))
         .catch(error => console.error('Unable to establish connection: ', error));

