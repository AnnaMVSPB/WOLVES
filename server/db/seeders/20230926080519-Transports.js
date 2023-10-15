/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Transports', [
      {
        name: 'Урал',
        ownerId: 1,
        categoryId: 3,
        price: 100000,
        description: 'Мотоцикл растаможили, но на учет так и не поставили. Пробег на одометре — всего 379 километров.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Детские коньки',
        ownerId: 1,
        categoryId: 4,
        price: 10000,
        description: ' детские коньки Снегурки , которые привязываются к валенкам ремешками',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Майбах с V12',
        ownerId: 1,
        categoryId: 1,
        price: 1000000000,
        description: '612 л.с. и 4,5 секунды до сотни',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Transports', null, {});
  },
};
