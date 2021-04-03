module.exports = {
    host: "mysql",
    username: "root",
    password: "Password1!",
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