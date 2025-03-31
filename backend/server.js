import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js';

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/products', productRoutes);
app.use(express.static(path.join(__dirname, "/frontend/dist")));

if (process.env.NODE_ENV === 'production') {
    console.log(process.env.NODE_ENV);
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend/dist/index.html"));
    });
}

app.listen(port, ()=>{
    connectDB();
    console.log(`Server is running on http://localhost:${port}`);
});