module.exports = {
  type: 'mysql',
  host: process.env.ORMCONFIG_HOST,
  port: process.env.ORMCONFIG_PORT,
  username: process.env.ORMCONFIG_USERNAME,
  password: process.env.ORMCONFIG_PASSWORD,
  database: 'todoapp',
  synchronize: true,
  entities: ['src/entity/*.ts'],
  subscribers: ['src/subscriber/*.ts'],
  migrations: ['src/migration/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
}
