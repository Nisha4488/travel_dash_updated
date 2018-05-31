const knex = require("../db/knex.js");

module.exports = {
    // CHANGE ME TO AN ACTUAL FUNCTION
    index: function (req, res) {
        knex('user').where('id', req.session.user_id)
            .then(data => {
                knex('trip')
                    .join('airline', 'airline.id', 'trip.airline_id')
                    .select("trip.*", "airline.airline_name", "airline.id AS airline_id")
                    .where('user_id', req.session.user_id)
                    .then(result => {
                        res.render('user_page', { user: data[0], trip: result })
                    })
            })
            
        
    },
}
