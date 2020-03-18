exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl
      .increments()

    tbl
      .integer('vin')
      .notNullable()
      .unique()
      .index()

    tbl
      .string('make', 255)
      .notNullable()
      .unique()

    tbl
      .string('model', 128)
      .notNullable()

    tbl
      .integer('mileage')
      .notNullable()

    tbl
      .string('transmissionType', 255)

    tbl
      .string('titleStatus', 255)
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
