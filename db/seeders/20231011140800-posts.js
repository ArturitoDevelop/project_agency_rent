/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Posts',
      [
        {
          title: 'title1',
          description: 'lalalalallala',
          price: 200,
          cat_id: 1,
        },
        {
          title: 'title2',
          description: 'lalalalallala',
          price: 2400,
          cat_id: 3,
        },
      ],
      {},
    );
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
