module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'logserver'),
      user: env('DATABASE_USERNAME', 'logserver'),
      password: env('DATABASE_PASSWORD', '_subhop)'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
