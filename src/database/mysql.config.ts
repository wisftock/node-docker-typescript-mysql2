import mysql from 'mysql2/promise';

const connection = async () => {
  const pool = await mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: 3306 || process.env.MYSQL_PORT,
    connectionLimit: 10 || process.env.MYSQL_CONNECTION_LIMIT,
  });

  return pool;
};

export { connection };
