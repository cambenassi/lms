const express = require("express");
var cors = require('cors');
const app = express();
const virtualDatabase = require('./data/virtualDatabase.js');

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

// EXPRESS CODE
// get cors working
app.use(cors());

// set up listening on port
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

// API CODE
app.use(express.json({ limit: '1mb' }));

// API routing to virtual database
app.post('/api', async (request, response) => {
  console.log('I got a request to test!');
  console.log(request.body);
  // send request to virtual database, and get constructed object back
  const data = await virtualDatabase.getData(request.body);

  // return data
  response.json({
    status: 'success',
    message: data,
  });

  console.log("Returned data object!: ", data);
});

app.post('/api2', async (request, response) => {
  console.log('I got a request to test!');
  console.log(request.body);
  // send request to virtual database, and get constructed object back
  const data = await virtualDatabase.setData(request.body);

  // return data
  response.json({
    status: 'success',
    message: data,
  });

  console.log("Returned data object!: ", data);
});
