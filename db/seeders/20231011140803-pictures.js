/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Pictures',
      [
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB69IVwfYQ8U03cAg7AvEv81HcbzazV5npWg&usqp=CAU',
          post_id: 1,
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB69IVwfYQ8U03cAg7AvEv81HcbzazV5npWg&usqp=CAU',
          post_id: 1,
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB69IVwfYQ8U03cAg7AvEv81HcbzazV5npWg&usqp=CAU',
          post_id: 1,
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB69IVwfYQ8U03cAg7AvEv81HcbzazV5npWg&usqp=CAU',
          post_id: 2,
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB69IVwfYQ8U03cAg7AvEv81HcbzazV5npWg&usqp=CAU',
          post_id: 2,
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB69IVwfYQ8U03cAg7AvEv81HcbzazV5npWg&usqp=CAU',
          post_id: 2,
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
