import { config } from 'dotenv';
import pg from 'pg';

config(); // Load environment variables

const { Pool } = pg;

// Validate required environment variables
if (!process.env.DB_USER || !process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_PASSWORD || !process.env.DB_PORT) {
    throw new Error('Missing required environment variables for database connection');
}

// Create a connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, // Use DB_PORT for database
});

export default pool;
