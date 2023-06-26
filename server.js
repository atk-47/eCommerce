import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/database.js";
import authRoutes from "./routes/authRoute.js"
import cors from "cors";

//config env
dotenv.config();

//db connection
connectDB();

const app = express(); //rest object

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoutes);

//rest API
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the HOME PAGE</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Dev Mode: ${process.env.DEV_MODE}. Server is running on port : ${PORT}`.bgBlue.white);
})