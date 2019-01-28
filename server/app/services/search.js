const Title = require('./lib/models/title');

module.exports = {
  async searchByTitle({ title }) {
    return await Title.findById({ titleName: title });
  }
};
