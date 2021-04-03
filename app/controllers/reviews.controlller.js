const db = require("../models");
const Review = db.review;
const Op = db.Sequelize.Op;

exports.create = (req,res) =>{
    

    const review = {
        idreviews: req.body.idreviews,
        parking_id: req.body.parking_id,
        user_id: req.body.user_id,
        review_date: req.body.review_date,   
        review_calification: req.body.review_calification,
        review_comment: req.body.review_comment,  
    };

    Review.create(review)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Error occurred while creating a review."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Review.findByPk(id)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:"Error retrieving review with id=" + id
        });
    });
  
};

exports.update = (req, res) => {
  
};

exports.delete = (req, res) => {
  
};

exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};