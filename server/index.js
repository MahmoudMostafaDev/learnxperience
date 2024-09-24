import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import newsletterRouter from './routes/newsletterRouter.js'
import connectDB from '../app/lib/db.js';
dotenv.config({
    path:'./.env'
})

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/v1', newsletterRouter)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})