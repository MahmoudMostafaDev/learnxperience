import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from '../app/lib/db.js';
dotenv.config({
    path:'./.env'
})

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());

app.get('api/v1/users', (req, res)=> {
    res.send("hello there");
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})