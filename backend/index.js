require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const menuRoutes=require('./routers/menu-router') // import routes
const cors=require('cors')

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.NEXT_API_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => console.error(" MongoDB Connection Failed:", err));

// Routes
app.use("/api/menu", menuRoutes);

// Start server
app.listen(PORT, (error) => {
  if (!error) {
    console.log(` Server is running at http://localhost:${PORT}`);
  } else {
    console.log(" Error:", error);
  }
});
