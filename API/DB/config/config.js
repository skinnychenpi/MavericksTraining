module.exports = {
  "development": {
    "username": "postgres",
    "password": process.env.DB_PASS,
    "database": "database_development",
    "host": "emp_db",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": process.env.DB_PASS,
    "database": "database_development",
    "host": "emp_db",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": process.env.DB_PASS,
    "database": "database_development",
    "host": "emp_db",
    "dialect": "postgres"
  }
}
