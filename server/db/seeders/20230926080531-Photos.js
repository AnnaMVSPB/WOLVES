/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Photos', [
      {
        url: 'https://a.d-cd.net/elAAAgPpauA-1920.jpg',
        transportId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://a.d-cd.net/i9AAAgPpauA-1920.jpg',
        transportId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://sportishka.com/uploads/posts/2022-08/1661305315_1-sportishka-com-p-konki-na-valenki-krasivo-1.jpg',
        transportId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://avatars.mds.yandex.net/get-vertis-journal/3934100/2021-05-18-e7a0252f5dff410382ce958db201636c.jpg_1622737472055/orig',
        transportId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        url: 'https://motor.ru/imgs/2021/05/18/07/4669479/b9feeb65a8fc55b65890098aab188158829c68de.jpg',
        transportId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Photos', null, {});
  },
};
