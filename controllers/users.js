const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("index");
  },
  register:function(req,res){
    knex("user").insert({
      user_name:req.body.name,
      email:req.body.email,
      password:req.body.password
    }).then(()=>{
      res.redirect('/');
    })
  },
  login:function(req,res){
    knex('user').where("email", req.body.email).then((results)=>{
      let user=results[0];
      if(user.password===req.body.password){ //store the user id in session
        req.session.user_id=user.id;
        req.session.save(()=>{
          res.redirect("/userpage");
        })
      }else {
        res.redirect('/');
      }
      }).catch(()=>{
        res.redirect('/');
    })
}
}
