import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// Api endpoints
app.get("/", (req, res) => {
    res.send("API working");
});

// Start server
app.listen(port, () => console.log("Server started on PORT : " + port));