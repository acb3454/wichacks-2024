const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.post('/updateData', (req, res) => {
  const newData = req.body;

  // Assuming postData.js contains an array
  const existingData = require('./src/postData');
  const updatedData = [...existingData, newData];

  fs.writeFileSync('./src/postData.js', `module.exports = ${JSON.stringify(updatedData)};`, 'utf-8');

  res.json({ message: 'Data updated successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
