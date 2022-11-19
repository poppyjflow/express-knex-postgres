// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://postgres:jjjjj@localhost/mytestdb'
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'mytestdb',
      user:     'usepostgresrname',
      password: 'jjjjj'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'mytestdb',
      user:     'usepostgresrname',
      password: 'jjjjj'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
