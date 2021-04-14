module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define(

        'reviews',
        {
            idreview:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            parking_id:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            user_id:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            review_date:{
                type: Sequelize.DATE,
                allowNull: true,
            },
            review_calification:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            review_comment:{
                type: Sequelize.TEXT('tiny'),
                allowNull: true,
            },
        },{
            timestamps: false
        }
        
    );
    return Review;
}