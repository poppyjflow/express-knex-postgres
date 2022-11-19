/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movie_genres').del()
  await knex('movie_genres').insert([
    {id: 1, genre: 'Action'},
    {id: 2, genre: 'Drama'},
    {id: 3, genre: 'Comedy'}
  ]);
};
