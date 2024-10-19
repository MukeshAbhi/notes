//function to create a users table in your database

import { Client } from "pg";

const client = new Client({
    connectionString: 'postgresql://neondb_owner:YrI7Pu6LMcCv@ep-bold-cherry-a5upient.us-east-2.aws.neon.tech/neondb?sslmode=require'
})

client.connect();

async function createUsersTable(){
    const result = await client.query(`
         CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `)

    console.log(result);
}

createUsersTable();