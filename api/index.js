import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

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
app.use("/api/auth", authRoute);
app.use("/api/users", authRoute);
app.use("/api/hotels", authRoute);
app.use("/api/rooms", authRoute);

app.listen(8080, () => {
    connect();
    console.log("connected to backend!");
})