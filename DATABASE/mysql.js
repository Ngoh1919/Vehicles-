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


// app.get("/this",async (req,res) => {
    // const bidder = await getBidder();
    // res.send(bidder) 
    //})
async function addBidder(bidder) {
    const { bidID, auctionID, customerID, amount, bidTime } = bidder;
    const sql = 'INSERT INTO Bid (bidID, auctionID, customerID, amount, bidTime) VALUES (?, ?, ?, ?, ?)';
    const values = [name, email, phone];
    const [result] = await pool.query(sql, values);
    return result.insertId;
} 

async function getBidder(bidderID) {
    const sql = 'SELECT * FROM Bid WHERE bidID = ?';
    const [rows] = await pool.query(sql, [bidderID]);
    return rows[0];
}

async function getAllBidders() {
    const sql = 'SELECT * FROM Bid';
    const [rows] = await pool.query(sql);
    return rows[0];
}

async function getAllAuction() {
    const sql = 'SELECT * FROM Auction'
    const [rows] = await pool.query(sql);
    return rows[0];

}

async function getAuction(auctionID) {
    const sql = 'SELECT * FROM Auction WHERE auctionID = ?';
    const [rows] = await pool.query(sql, [auctionID]);
    return rows[0];
}

async function addAuction(auction) {
    const { auctionID, auctionName, auctionDate, auctionLocation } = auction;
    const sql = 'INSERT INTO Auction (auctionID, carID, startDate, endDate, startingPrice) VALUES (?, ?, ?, ?)';
    const values = [auctionID, auctionName, auctionDate, auctionLocation];
    const [result] = await pool.query(sql, values);
    return result[0];
}