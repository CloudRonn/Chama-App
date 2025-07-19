const express = require("express");
const connectDB = require("./mongo");
require("dotenv").config();
const cors = require("cors");
const authRoutes = require("./routes/auth");

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
