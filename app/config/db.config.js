module.exports = {
    host: "3.14.68.142:3307",
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