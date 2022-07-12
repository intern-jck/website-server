const express = require('express');
const app = express();
app.use(express.json());
// const fs = require('fs');

const PORT = 3000;

// const projectData = '../data/projectData.json';


app.get('/', (req, res) => {
  // console.log(req);
  // fs.writeFile(projectData, req.body, (err) => {
  //   if (err) (console.log(err));
  //   console.log('json saved');
  // });
  // res.sendStatus(req.status);
  res.send('hello\n');
});

app.listen(PORT, () => {
  console.log(`Listening @ http://127.0.0.1:${PORT}`);
});
