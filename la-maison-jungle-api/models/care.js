const Plant = sequelize.define('Plant', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    care: {
        type: DataTypes.INTEGER,
        /* Le niveau d'entretien est un nombre entre 1 et 3 */
        allowNull: true
    }
})