import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/physicsSimulation')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the MERN Physics Simulation server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});