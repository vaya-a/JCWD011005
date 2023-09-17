module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
            user_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        first_name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        phone: {
            allowNull: false,
            type: Sequelize.BIGINT
        },
        gender: {
            type: Sequelize.STRING
        },
        birthdate: {
            type: Sequelize.DATEONLY
        },
        image_profile: {
            type: Sequelize.STRING
        },
        image_id_card: {
            type: Sequelize.STRING
        },
        otp: {
            type: Sequelize.INTEGER
        },
        otp_sent_a_day: {
            defaultValue: 0,
            type: Sequelize.INTEGER
        },
        is_otp_expired: {
            type: Sequelize.BOOLEAN
        },
        is_verified: {
            allowNull: false,
            defaultValue: false,
            type: Sequelize.BOOLEAN
        }
    }, {
        createdAt: false,
        timestamps: false,
        updatedAt: false
    });

    return User;
}