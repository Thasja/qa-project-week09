const express = require('express');
const app = express();
const port = 4000

const path = require('path');

app.use(express.static(path.join(__dirname, '/../qa-project-week09')));

app.post('/register', (req, res) => {
  fullName = req.body.fullName;
  email = req.body.email;
  password = req.body.password;
  res.json({result: 'Success'})
})
  
app.put('/login', (req, res) => {
  res.json({result: 'Success'})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})