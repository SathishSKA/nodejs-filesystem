const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

let ts = Date.now();

let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

console.log(date + "-" + month + "-" + year);
const timestamp = date + "-" + month + "-" + year;
fs.writeFile("date-time.txt", `${timestamp}`, (err) => {
  if (err) throw err;
  console.log("Time stamp file created!");
});
app.get("/", function (req, res) {
  res.json(timestamp);
});

app.listen(process.env.PORT || 5000, function () {
  console.log("Server is running on pott 5000");
});
