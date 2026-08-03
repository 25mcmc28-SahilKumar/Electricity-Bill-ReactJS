const express = require("express");
const cors = require("cors");
require("dotenv").config();



const db = require("./config/db");

const customerRoutes = require("./routes/customerRoutes");



const app = express();
app.use(express.json());

app.use(cors());
app.use(express.json());
app.use("/customers", customerRoutes);

app.get("/", (req, res) => {
  res.send("Electricity Bill API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});