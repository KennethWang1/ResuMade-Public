import pg from 'pg';
require('dotenv').config()
const { Client } = pg;
const { Pool } = pg;

console.log(String(process.env.DB_PASSWORD));

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'postgres',
  port: 5432,
  password: String(process.env.DB_PASSWORD), // Convert to string
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