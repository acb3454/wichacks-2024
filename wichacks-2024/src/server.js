const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path'); // Import the path module

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/updateData', (req, res) => {
  const newData = req.body;

  // Use an absolute path
  const existingData = require(path.resolve(__dirname, 'postData'));

  const updatedData = [...existingData, newData];

  fs.writeFileSync('/postData.js', `module.exports = ${JSON.stringify(updatedData)};`, 'utf-8');

  res.json({ message: 'Data updated successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
