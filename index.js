import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './src/routes/index.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(router);

mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('🟢 DB Connected');
    app.listen({ port: process.env.PORT }, () => {
      console.log(`🚗 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('🔴 There was an error on the DB connection method.');
    console.log(err);
  });