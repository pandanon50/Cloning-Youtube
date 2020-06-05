import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./model/Video";
import "./model/Comment";

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log('✔ Listening on : http://localhost:4000');

app.listen(PORT,handleListening);