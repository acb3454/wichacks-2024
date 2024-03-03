const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Existing data
const existingDataPath = path.resolve(__dirname, 'postData');
let existingData = require(existingDataPath);

app.post('/updateData', (req, res) => {
  const newData = req.body;

  existingData.push(newData);

  fs.writeFileSync(existingDataPath + '.js', `module.exports = ${JSON.stringify(existingData)};`, 'utf-8');

  res.json({ message: 'Data updated successfully' });
});

app.put('/addSong/:playlistName', (req, res) => {
  const { playlistName } = req.params;
  const { song } = req.body; // Correct parameter name

  // Find the post in the existing data array
  const postIndex = existingData.findIndex(post => post.playlistName === playlistName);

  if (postIndex !== -1) {
    // Add the selected song to the post's songs array
    if (!existingData[postIndex].songs) {
      existingData[postIndex].songs = [];
    }
    existingData[postIndex].songs.push(song); // Correct parameter name

    // Update the JSON file
    fs.writeFileSync(existingDataPath + '.js', `module.exports = ${JSON.stringify(existingData)};`, 'utf-8');

    res.json({ message: 'Song added successfully' });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
