
exports.up = function(knex, Promise) {
  return knex.schema.createTable("trip", (table)=>{
    table.increments();
    table.string("trip_name");
    table.string("from");
    table.string("to");
    table.integer("airline_id")
      .references("id")
      .inTable("airline")
      .onDelete("CASCADE")
      .index();
    table.integer("user_id")
        .references("id")
        .inTable("user")
        .onDelete("CASCADE")
        .index();
    table.date("date");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("trip");
};
