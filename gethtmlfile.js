const http = require("https");
const fs = require("fs");
const someStreamingMatchUrl = "https://www.streamsports.io/live/england/premier-league/18843/afc-bournemouth-vs-tottenham-hotspur/"
const localFileName = "./testFiles/bou-tot.html"
const file = fs.createWriteStream(localFileName);

http.get(someStreamingMatchUrl, response => {
  response.pipe(file);
});
