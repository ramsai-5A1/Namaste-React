const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
const filePath = './Database/data.json';

app.get('/api/data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.json({
        error: "Something went wrong"
      });
      return;
    }
  
    try {
      const jsonData = JSON.parse(data);
      console.log('Parsed JSON data:', jsonData);
      console.log('Message:', jsonData.message);
      res.json(jsonData);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });
  console.log("Completed the api execution");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
