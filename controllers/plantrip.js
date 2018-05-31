const knex = require("../db/knex.js");

module.exports = {
    // CHANGE ME TO AN ACTUAL FUNCTION
    index: function (req, res) {
        knex('airline')
            .then(result => {
                res.render('plan_trip', { airline: result });
            })
    },
    newTrip: function (req, res) {
        knex('trip').insert({
            trip_name: req.body.name,
            from:   req.body.from,
            to: req.body.to,
            airline_id: req.body.airline,
            user_id: req.session.user_id,
            date: req.body.date
        })
        .then(()=>{
            res.redirect('userpage')
        })
    },
}
