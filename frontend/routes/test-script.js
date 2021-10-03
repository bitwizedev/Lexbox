var express = require('express');
var router = express.Router();
const axios = require('axios');
const { response } = require('express');




router.get('/', (req,res) =>{
    axios.post('http://localhost:7000/test-script',{ var: "das" }).then((response) =>{
        if(response.status ==200){
            res.render('home.ejs');
        }
    })
      
    });
   

module.exports = router;
