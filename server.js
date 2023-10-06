const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./Config/db");
const userRoutes = require("./Routes/userRoute");
const postRoutes = require("./Routes/postRoute");

connectDB();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message:
        "Welcome to the Post management API! swith routes to perform opration",
    });
});
app.use("/api", userRoutes);
app.use("/api", postRoutes);

const port = process.env.PORT || 8004;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});