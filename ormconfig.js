const CustomNamingStrategy = require('./dist/CustomNamingStrategy').default

module.exports = {
  type: 'mysql',
  host: process.env.ORMCONFIG_HOST,
  port: process.env.ORMCONFIG_PORT,
  username: process.env.ORMCONFIG_USERNAME,
  password: process.env.ORMCONFIG_PASSWORD,
  database: 'todoapp',
  synchronize: true,
  entities: ['dist/entity/*.js'],
  subscribers: ['dist/subscriber/*.js'],
  migrations: ['dist/migration/*.js'],
  cli: {
    entitiesDir: 'dist/entity',
    migrationsDir: 'dist/migration',
    subscribersDir: 'dist/subscriber',
  },
  namingStrategy: new CustomNamingStrategy(),
}
