const express = require("express");
const app = express();
const cors = require("cors");
const env = require("dotenv");
env.config();
const port = process.env.PORT; // Use a default port if not specified in .env
const connectDatabase = require("./db/Schema")
// Middleware
app.use(express.json());
app.use(cors());
connectDatabase();

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
