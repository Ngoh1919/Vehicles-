import { config } from 'dotenv';

config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

export const { PORT, NODE_ENV, MYSQL_HOST,MYSQL_USER,MYSQL_PASSWORD,MYSQL_DATABASE } = process.env;