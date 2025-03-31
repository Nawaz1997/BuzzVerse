const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const authRoute = require('./routes/auth');

const app = express();
const PORT = 3000;

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

//routes
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Server Running at PORT : ${PORT}`);
});