import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";

// initialize the express
const app = express();
dotenv.config();

// establishing connection to mongodb
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb!");
    } catch (error) {
        console.log("error connecting to the database!: ");
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected!");
});

mongoose.connection.on("conneted", () => {
    console.log("mongodb connected!");
});

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


// middleware to handle errors
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
});

app.listen(8080, () => {
    connect();
    console.log("connected to backend!");
})