import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import apiRoutes from './api-routes';
import Config from './config';

const ENV = process.env.NODE_ENV;
const app = express();

app.use(cors());

mongoose.connect(Config[ENV].MONGODB_URL, { useNewUrlParser: true, useFindAndModify: false });

app.get('/', (req, res) => {
  res.json({ message: 'OK' });
});

app.use('/api', apiRoutes);

app.listen(Config[ENV].PORT, () => {
  console.log(`Server running on port ${Config[ENV].PORT}`);
});
