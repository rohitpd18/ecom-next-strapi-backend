    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        // client: env(process.env.DATABASE_CLIENT),
        client: process.env.DATABASE_CLIENT,
        connection: {
          host: process.env.DATABASE_HOST,
          port: process.envDATABASE_PORT,
          database: process.env.DATABASE_NAME,
          user: process.env.DATABASE_USERNAME,
          password: process.env.DATABASE_PASSWORD,
          schema: process.env.DATABASE_SCHEMA, // Not required
          ssl: {
            rejectUnauthorized: process.env.DATABASE_SSL_SELF
          },
        },
        debug: false,
      },
    });