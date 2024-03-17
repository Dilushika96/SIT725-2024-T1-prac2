var express = require("express") 
var app = express()
var port = process.env.port || 3000;

app.get('/addTwoNumbers',(req, res)=> {
  response = {
    result:parseFloat(req.query.param1)+parseFloat(req.query.param2),
 };
 res.end(JSON.stringify(response));
})
 
 app.listen(port,()=>{
 console.log("App listening to: "+port)

 })