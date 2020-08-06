import app from './app';
import './db';
// eslint-disable-next-line import/order
import dotenv from 'dotenv';
import './model/Video';
import './model/Comment';
import './model/User';

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log('✔ Listening on : http://localhost:4000');

app.listen(PORT, handleListening);
