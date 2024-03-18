import express from 'express';
import connectDB from './db/db.js';
import colors from 'colors';
import dotenv from 'dotenv';
import Routes from '../src/routes/route.js';

dotenv.config();
const app = express();
app.use(express.json());


connectDB()
    .then(() => {
        app.listen(5000, () => {
            console.log('Sever in running on port: 5000'.yellow.bold)
        })
    })
    .catch((error) => {
        console.log('MongoDB connection error: '.red.bold, error);
    })

app.use('/', Routes);

