const express = require("express");

const app = express();

app.use(express.static("dist"));

/* Middleware*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

console.log(__dirname);

// Serve the frontend page
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

const port = process.env.PORT || 3000;

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
