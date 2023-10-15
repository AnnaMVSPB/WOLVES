/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [{
      name: 'Автомобили',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Велосипеды',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Мототехника',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Другое',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
