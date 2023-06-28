const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true})); //when data are from html form


app.get('/', (req, res) => { // home route
    res.sendFile(__dirname + "/index.html") //give the file path no matter where is hosted
});

app.post("/", (req, res) => {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var result =  weight / (height * height);
    // res.send("Your BMI is " + Math.round(result * 100) / 100);

    fs.readFile(__dirname + "/index.html", 'utf8', (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
            data = data.replace("</form>", "</form><p id='result'>Your BMI is <span class='result-value'>" + Math.round(result * 100) / 100 + "</span></p>");
            res.send(data);
        }
      });
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });