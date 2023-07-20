const express = require('express');
const app = express();

const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set('view engine' ,'ejs');


app.get('/', (req, res) => {
  res.render('index')
});


/* In this code snippet, `const port = process.env.Port | 5000;` is setting the value of the `port`
variable. */
const port = process.env.Port | 5000;

app.listen(port, () => {
  console.log(`This server is running on port http://localhost:${port}`);
});
