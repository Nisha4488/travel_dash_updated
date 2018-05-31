
exports.up = function(knex, Promise) {
  return knex.schema.createTable("airline", (table)=>{
    table.increments();
    table.string("airline_name");
    table.string("img_url");
    table.text("description");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("airline");
};
