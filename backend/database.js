import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config()
const { Client } = pg;
const { Pool } = pg;

const pool = new Pool({
  user: 'postgres',
  database: 'postgres',
  password: String(process.env.DB_PASSWORD), // Convert to string
  port: 5432
});


const client = new Client();
await pool.connect();

async function signup(username, password) {
    const query = `
        INSERT INTO users (username, password)
        VALUES ('${username}', '${password}')
    `;
    
    await pool.query(query);
    console.log('Data insert successful');
    return true;
}

async function fetchUser(token) {
  const query = `
      INSERT INTO users (username, password)
      VALUES ('${username}', '${password}')
  `;
  
  await pool.query(query);
  console.log('Data insert successful');
  return true;
}

export { signup };
export { fetchUser };