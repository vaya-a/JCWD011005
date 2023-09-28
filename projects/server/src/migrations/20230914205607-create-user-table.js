'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
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
      otp: {
        type: Sequelize.INTEGER
      },
      otp_sent_a_day: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      otp_last_sent: {
        type: Sequelize.DATE
      },
      is_verified: {
        allowNull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      login_method_id: {
        type: Sequelize.INTEGER,
      }
    }, {
      createdAt: false,
      timestamps: false,
      updatedAt: false
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
