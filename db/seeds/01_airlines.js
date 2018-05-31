
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airline').del()
    .then(function () {
      // Inserts seed entries
      return knex('airline').insert([
        { airline_name: 'SOUTHWEST', img_url:'https://milestomemories.boardingarea.com/wp-content/uploads/2013/12/southwest-logo.jpg', description:'Free drinks and food!'},
        { airline_name: 'DELTA', img_url:'https://i.forbesimg.com/media/lists/companies/delta-air-lines_416x416.jpg', description:'Poor service, had to ride on the wing'},
        { airline_name: 'Alaska', img_url:'https://images.forbes.com/media/lists/companies/alaska-airlines_416x416.jpg', description:'Only crashed 3 times before arriving at destination'}
      ]);
    });
};
