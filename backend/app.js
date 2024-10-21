const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const logger = require("./middleware/logger");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000; // Set the port from environment variables or default to 8000

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse incoming JSON requests
app.use(logger); // Log all incoming requests and responses

/**
 * Primary route for handling user-related API calls.
 * Uses the `userRoutes` router module.
 */
app.use("/api/users", userRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
