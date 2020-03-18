
exports.up = function (knex) {
  knex.schema.createTable('cars', tbl => {
    tbl.increments()

    tbl.number('vin')
      .notNullable()
      .unique()
      .index()

    tbl.string('make', 255)
      .notNullable()
      .unique()

    tbl.string('model', 128)
      .notNullable()

    tbl.number('mileage')
      .notNullable()

  })
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists('cars')
};
