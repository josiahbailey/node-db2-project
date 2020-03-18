
exports.seed = async function (knex) {
  const testData = [
    { vin: 111, make: 'ao1020fj01fj09a', model: 'sean-mobile', mileage: 1209103 },
    { vin: 222, make: 'e1j1je0j120e910', model: 'sean-mobile', mileage: 1231232 },
    { vin: 333, make: '12e09j0dj09asjd', model: 'sean-mobile', mileage: 3213123 }
  ];

  // Deletes all existing entries and resets the ids back to 1
  await knex('cars').truncate()

  return knex('cars').insert(testData);
}

