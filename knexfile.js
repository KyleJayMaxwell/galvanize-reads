// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/gread',
    seeds: {
      directory: './seeds/'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    seeds: {
      directory: './seeds/'
    }
  }

};