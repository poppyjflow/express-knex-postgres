/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
  .then(function () {
    // Inserts seed entries
    return knex('movies').insert([
      {id: 1, title: 'Vicky Cristina Barcelona', release_date: '2008-08-15', genre_id: '2'},
      {id: 2, title: 'Orfeu Negro', release_date: '1959-12-21', genre_id: '3'},
      {id: 3, title: 'Midnight in Paris', release_date: '2011-05-20', genre_id: '1'},
    ]);
  });
};
