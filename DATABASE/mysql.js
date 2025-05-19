import mysql from 'mysql2';

import {MYSQL_HOST,MYSQL_USER,MYSQL_PASSWORD,MYSQL_DATABASE} from '../config/env.js';

const pool = mysql.createPool({

    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
}).promise();

const result = await pool.query('SELECT * FROM Customer');
console.log(result[0]);