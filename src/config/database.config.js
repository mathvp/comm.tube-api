module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'commtube_db',
  define: {
    timestamps: true,
    underscored: true,
  }
}