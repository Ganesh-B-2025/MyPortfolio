import express from 'express'
import cors from 'cors'
import contactRouter from './routes/contactRoute.js';
import connectDB from './config/db.js';


const app = express();
const port = process.env.PORT || 2025;

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/contact/', contactRouter);

app.get("/", (req, res) => {
    res.send("Hello");
})


app.listen(port, () => {
    console.log(`server running on port http://localhost:${port}`);
})