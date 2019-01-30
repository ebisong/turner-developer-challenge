const Title = require('../models/title');

module.exports = {
  async searchByTitle({ title }) {
    return await Title.find({ TitleName: title });
  }
};
