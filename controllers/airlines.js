const knex = require("../db/knex.js");

module.exports = {
all: function(req, res){
  knex("trip").join('airline', 'airline.id', 'trip.airline_id')
  .where('trip.id', req.params.id)
  .then((results)=>{
    res.render("trip_details", { trip: results[0] });
  })
}
}
