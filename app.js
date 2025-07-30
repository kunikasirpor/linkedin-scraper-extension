import express from 'express';
import cors from 'cors';
import { sequelize } from './models/index.js';
import profileRoutes from './routes/routes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());
app.use(express.json());
app.use('/', profileRoutes);

await sequelize.sync(); 
console.log('Database & tables ready');

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
