var mysql = require('mysql')

const conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"crm"
});

conn.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("connected..")
    }
})


module.exports = conn;