var fs = require('fs');
path = require('path'),    
filePath = path.join(__dirname, "/scrumboard.json"); 

// json file with the data
var data = fs.readFileSync(filePath);
var jsonData = JSON.parse(data)
   
var storypoints = jsonData['storypoints']
var storyboards = jsonData['storyboard']

const extAuthz = require('@build-security/opa-express-middleware');
const express = require("express");
const app = express();
const port = 3000

const extAuthzMiddleware = extAuthz.authorize((req) => ({
    port: 8181,
    hostname: 'http://opaserver',
    policyPath: '/istio/authz/allow',
}));

bodyParser = require('body-parser');
app.use(bodyParser.json(), extAuthzMiddleware);
   
// To solve the cors issue
const cors=require('cors');
app.use(express.json())
app.listen(port, 
    () => console.log("Server Start at the Port 3000"));
    
app.use(express.static('public'));
app.use(cors());

// when get request is made, alldata() is called
app.get('/', function(req, res)  {
    res.sendFile('index.html', { root: __dirname });
  });
app.get('/storypoints', function(req, res) {res.send(storypoints)});
app.get('/storyboards', function(req, res) {res.send(storyboards)});
app.post('/storyboard', function(req, res) { const { title, estimation, priority} = req.body
let storyboard = {
    "id":storyboards.Lenght + 1, 
    "title":title,
    "estimation":estimation,
    "state":0,
    "priority":priority 
};
storyboards.push(storyboard)
jsonData['storyboard'] = storyboards 
let data = JSON.stringify(jsonData, null, 2);

fs.writeFile('./nodejs_backend/scrumboard.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});});
app.delete('/storyboard/:id', function(req, res) { const id = req.params.id
storyboardsfilterd = storyboards.filter(word => word.id !== id);
   console.log(id)
   console.log(storyboards)
   console.log(storyboardsfilterd)
   
    jsonData['storyboard'] = storyboards 
    let data = JSON.stringify(jsonData, null, 2);
    
    fs.writeFile('./nodejs_backend/scrumboard.json', data, (err) => {
        if (err) throw err;
        console.log('Data deleted');
    })});