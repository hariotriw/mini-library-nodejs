'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.bulkInsert('Categories', [
       {
        name: 'ensiklopedia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'pelajaran',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'life-story / biografi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'kesehatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'keuangan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'makanan & minuman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'novel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'komik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'lainnya',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  },
};