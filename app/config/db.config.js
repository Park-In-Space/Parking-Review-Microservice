module.exports = {
    host: "host.docker.internal",
    username: "root",
    password: "root",
    database: "pis_review_db",
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