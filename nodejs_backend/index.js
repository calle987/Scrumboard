var fs = require('fs');
   
// json file with the data
var data = fs.readFileSync("scrumboard.json");
   
var storypoints = JSON.parse(data.storypoints);
var storyboards = JSON.parse(data.storyboard);

const express = require("express");
const app = express();
const port = 3000
   
// To solve the cors issue
const cors=require('cors');
    
app.listen(port, 
    () => console.log("Server Start at the Port 3000"));
    
app.use(express.static('public'));
app.use(cors());
  
// when get request is made, alldata() is called
app.get('/storypoints', getstorypoints);
app.get('/storyboards', getstoryboards)
   
function getstorypoints(response) {
    // Returns all information about the elements
    response.send(storypoints);
}

function getstoryboards(response) {
    // Returns all information about the elements
    response.send(storyboards);
}