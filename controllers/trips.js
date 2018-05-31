const knex = require("../db/knex.js");

module.exports = {
  edit: function(req, res) {
    knex('trip').where('id', req.params.id)
      .then((data)=>{
        knex('airline').then((result) => {  
          res.render("trip_edit", { trip: data[0] , airline: result });
        })
      })

  },
  update: function(req, res) {
    knex('trip').where('id', req.params.id).update(req.body)
      .then(()=>{
        res.redirect('/userpage')
      })
  }
}
