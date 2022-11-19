/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('movie_genres', table => {
    table.increments('id'); // adds an auto incrementing PK column
    table.string('genre').notNullable();
  })
  .createTable('movies', table => {
      table.increments('id'); // adds an auto incrementing PK column
      table.string('title').notNullable();
      table.date('release_date');
      table.timestamps(true, true); // adds created_at and updated_at
      table.integer('genre_id').references('id').inTable('movie_genres').notNullable().onDelete('cascade');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('movies');
};
