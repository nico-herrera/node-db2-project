
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "id": 1,
          "VIN": "19UDE2F37HA001718",
          "Make": "Acura",
          "Model": "ILX",
          "Mileage": 20000,
          "Title": null,
          "Transmission": null
        },
        {
          "id": 2,
          "VIN": "5J8TC1H31ML002614",
          "Make": "Acura",
          "Model": "rdx",
          "Mileage": 20000,
          "Title": null,
          "Transmission": null
        }
      ]);
    });
};
