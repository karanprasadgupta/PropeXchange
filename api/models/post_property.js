const PropertyModel = (sequelize, type) => sequelize.define('Property', {
    id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        apartment: type.STRING,
        apartmentname:type.STRING,
        bhk: type.STRING,
        floor: type.INTEGER,
        totalfloor: type.STRING,
        propertyage: type.STRING,
        expectedrent: {
        type: type.INTEGER,
        allowNull: false,
        },
        expectedDepost: {
        type: type.INTEGER,
        allowNull: false},
        date:type.DATE
});

export default PropertyModel;