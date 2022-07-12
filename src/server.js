const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3000;

const projectData = '../data/projectData.json';

app.use(express.json());

app.post('/saveData', (req, res) => {
  console.log(req);
  // fs.writeFile(projectData, req.body, (err) => {
  //   if (err) (console.log(err));
  //   console.log('json saved');
  // });
  res.send(200);
});

app.listen(PORT, () => {
  console.log(`Listening @ http://127.0.0.1:${PORT}`);
});
