const express = require("express");
const connectDB = require("./mongo");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
