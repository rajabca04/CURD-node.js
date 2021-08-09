var express = require('express');
var router = express.Router();
var conn = require("../db")
/* GET home page. */
router.get('/', function(req, res, next) {
  let sql = "select * from clients";
  let query = conn.query(sql,function(err,result){
    if(err) throw err;
    res.render('index',{"result":result});
  })
});

router.post("/",function(req,res){
  let i = 0;
  let sql = "insert into clients (name,contact,email,address,gender,nationality) values (?,?,?,?,?,?)";
  let query = conn.query(sql,[req.body.name,req.body.contact,req.body.email,req.body.address,req.body.gender,req.body.nationality],
    function(err,result){
    if(err) throw err;
    res.redirect("/")
  })
})

router.get("/delete/:id",function(req,res){
  let sql = "delete from clients where id = ?";
  let query = conn.query(sql,[req.params.id],function(err,result){
    if (err) throw err;
    console.log("delete...")
    res.redirect("/")
  })
})

router.get("/update/:id",function(req,res){
  res.render("update")
})

router.post("/update/:id",function(req,res){
  let sql = "update clients set name = ? , contact = ? , email = ? , address = ?, gender = ? , nationality = ? where id = ?"
  let query = conn.query(sql,[req.body.name,req.body.contact,req.body.email,req.body.address,req.body.gender,req.body.nationality,req.params.id],
    function(err,result){
    if(err) throw err;
    res.redirect("/")
  }) 
})

module.exports = router;
