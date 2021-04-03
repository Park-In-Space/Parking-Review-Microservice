module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define(

        'reviews',
        {
            idreviews:{
                type: DataTypes.INT,
                allowNull: false,
                primaryKey: true,
            },
            parking_id:{
                type: DataTypes.INT,
                allowNull: false,
            },
            user_id:{
                type: DataTypes.INT,
                allowNull: false,
            },
            review_date:{
                type: DataTypes.DATE,
                allowNull: true,
            },
            review_calification:{
                type: DataTypes.INT,
                allowNull: false,
            },
            review_comment:{
                type: DataTypes.TINYTEXT,
                allowNull: true,
            },
        }
    );
    return Review;
}