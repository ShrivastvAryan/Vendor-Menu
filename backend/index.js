require("dotenv").config(); 
const express = require("express");
const mongoose = require("mongoose");
const menuRoutes = require("./routers/menu-router"); // import routes
const cors = require("cors");
const { requireAuth } = require("@clerk/express");
const { getPublicMenu } = require("./controllers/menu-controller");
const {getMyPage} = require("./controllers/menu-controller");
const{deleteMenu}=require("./controllers/menu-controller")

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/menu", requireAuth(), menuRoutes);
app.get("/api/public/:_id", getPublicMenu);
app.get("/api/restaurant/mypage", requireAuth(), getMyPage);
app.delete("/api/restaurant/mypage/:_id", requireAuth(),deleteMenu);

app.get("/healthcheck", (req, res) => {
  res.status(200).send("Server is healthy");
});

// MongoDB Connection
mongoose
  .connect(process.env.NEXT_API_MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

// Start server
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running at http://localhost:${PORT}`);
  } else {
    console.log("Error:", error);
  }
});
