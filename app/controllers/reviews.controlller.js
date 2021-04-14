const db = require("../models");
const Review = db.review;
const Op = db.Sequelize.Op;

exports.create = (req,res) =>{
    

    const review = {
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
  const id =req.params.id;
  Review.update(req.body,{
      where: {idreview: id}
  })
  .then(num => {
      if(num == 1){
          res.send({
            message: "Review updated!"
          });
      } else {
          res.send({
              message: "Cannot update Review!!"
          });
      }
  })
  .catch(err =>{
      res.status(500).send({
          message: "Error updating Review (500)"
      });
  });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Review.destroy({
        where: {idreview:id}
    })
    .then(num => {
        if(num==1){
            res.send({
                message: `Review with id ${id} was deleted.`
            });
        }else{
            res.send({
                message: "Cannot delete review"
            });
        }
    })
    .catch(err=>{
        res.status(500).send({
            message: "Error while deleting review (500)"
        });
    });
};

exports.deleteAll = (req, res) => {
    Review.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Reviews were deleted.` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "An error occurred while removing all Reviews (500)."
          });
        });
};
