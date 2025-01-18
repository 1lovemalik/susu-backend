import express, { json } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import pool from './config/dbConfig.js';

config();

const app = express();

app.use(json());
app.use(cors());

(async () => {
    try {
        const res = await pool.query('SELECT NOW()'); // Use pool.query
        console.log('Connected to the database. Server time:', res.rows[0].now);
    } catch (err) {
        console.error('Error connecting to the database:', err.message);
    }
})();

app.get('/', (req, res) => {
    res.send('Susu Backend is up and running');
});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
