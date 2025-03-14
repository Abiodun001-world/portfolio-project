/* const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle 404 - Page Not Found
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/

const express = require("express")
const path = require("path")
const cors = require("cors")

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve the frontend build files
app.use(express.static(path.join(__dirname, "portfolio-app/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "portfolio-app/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
