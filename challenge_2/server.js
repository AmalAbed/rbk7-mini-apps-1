const express = require('express');
const app = express();
const port = 1128;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('client'));

app.post("/", function(req,res) {
   var obj = req.body.submit;
   splitKeysObj(obj);
   let csvContent = "data:text/csv;charset=utf-8,";
   
});
app.get("/", function(req,res) {
  res.send('hello');
});
app.listen(1128, function(){
    console.log("Listening on 1128")
});

var splitKeysObj = function(obj){
  debugger;
 var keyArray = Object.keys(obj);
 var str1 = keyArray[0];
 for(var i = 1;i < keyArray.length ; i++){
   str1 = str1 + "," + keyArray[i];
 }
 str1 = str1 + "\n";
 var str="";
 var getData = function(values){
   for(var key in values){
     str = str + values[key] + ",";
   }
   str = str + "\n"
   if(values.children.length === 0){
     return str;
   }
   else{
     for(var i = 0;i < values.children.length;i++){
        str = str + "\n" + getData(values.children[i]);
     }
   } 
     
 }
 getData(obj);
 str1 = str1 + str;
 return str1;
}
module.exports = app;
