import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql';

const app = express();

app.set('port', 3000);

dotenv.config();

const connection = mysql.createConnection({
  "host": process.env.HOST,
  "user": process.env.USER,
  "password": process.env.PASSWORD
});

connection.connect(error => { error ? console.log(error) : console.log('Succesfully connected to database.')});
