//--------------------DEPENDENCIES-------------------//
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const request = require('request')

//-------------------IMPORTS------------------------//
const db = require('./models')
const PORT = 4040;
const app = express()
const publicRoutes = require('./routes/publicRoutes.js')
app.use(publicRoutes)
//---------------------CONNECT TO MONOG-----------------//

mongoose.connect("mongodb://localhost/mongoScrapper")



//--------------------MIDDLEWARE------------------//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



app.engine(
    'handlebars',
    exphbs({
      extname: 'handlebars',
      defaultLayout: 'main',
      layoutsDir: __dirname + '/views/layouts/'
    })
  );


  //////////////
app.set('view engine', 'handlebars');
//Routes

app.get("/scrape", function(req, res) {
  // First, we grab the body of the html with request
  request("https://www.nytimes.com/").then(function(response) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    var $ = cheerio.load(response.data);

    $("h2").each(function(i, element) {
      // Save an empty result object
      var result = {};

      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

      // Create a new Article using the `result` object built from scraping
      db.mongoScrapper.create(result)
        .then(function(result) {
          // View the added result in the console
          console.log(result);
        })
        .catch(function(err) {
          // If an error occurred, send it to the client
          return res.json(err);
        });
    });

    res.send("Scrape Complete");
  });
});




app.listen(PORT, function() {
   console.log("App running on port " + PORT + "!");
  });
  