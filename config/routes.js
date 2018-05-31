const users = require("../controllers/users.js");
const airlines = require("../controllers/airlines.js");
const trips = require("../controllers/trips.js");
const userPage = require("../controllers/user_page.js");
const planTrip = require("../controllers/plantrip.js")

module.exports = function(app){

  app.get('/', users.index);
  app.post('/register', users.register);
  app.post('/login', users.login);
  app.use(authMiddleware);
  app.get('/airlines/:id', airlines.all);
  app.get('/edit/:id', trips.edit);
  app.get('/userpage', userPage.index);
  app.get('/plantrip', planTrip.index)
  app.post('/plan', planTrip.newTrip)
  app.post('/update/:id', trips.update)
}

function authMiddleware(req, res, next){
  if(req.session.user_id){
    next();
  }else{
    res.redirect('/')
  }
}
