'use strict';

const md5 = require('md5');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'Quang Minh',
      email: 'qm@gmail.com',
      password: md5("123"),
      role: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Quang Minh 1',
      email: 'qm1@gmail.com',
      password: md5("123"),
      role: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Quang Minh 2',
      email: 'qm2@gmail.com',
      password: md5("123"),
      role: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
