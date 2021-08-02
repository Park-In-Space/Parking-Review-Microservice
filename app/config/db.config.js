module.exports = {
    host: "ps-review-ms.cwqt7dh9rz9y.us-east-2.rds.amazonaws.com",
    port: "3306",
    username: "admin",
    password: "parkinspace",
    database: "review_db",
    dialect: "mysql",
    define:{
      timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }    
  };