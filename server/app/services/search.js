const Title = require('../models/title');

module.exports = {
  async searchByTitle({ title }) {
    return await Title.findById({ titleName: title });
  }
};
