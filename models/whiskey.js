import Sequelize from 'sequelize';

export default Whiskey = sequelize.define('whiskey', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  description: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
});
