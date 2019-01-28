const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
  AwardWon: Boolean,
  AwardYear: Number,
  Participants: [String],
  Award: String,
  AwardCompany: String
});

const otherNameSchema = new mongoose.Schema({
  TitleNameLanguage: Boolean,
  TitleNameType: Number,
  TitleNameSortable: [String],
  TitleName: String,
});

const storyLineSchema = new mongoose.Schema({
  Description: String,
  Language: String,
  Type: String,
});

const titleSchema = new mongoose.Schema({
  name: String,
  Awards: [awardSchema],
  Genres: [String],
  OtherNames: [otherNameSchema],
  TitleId: Number,
  TitleName: String,
  TitleNameSortable: String,
  ReleaseYear: Number,
  Storylines: [storyLineSchema]
});

module.exports = mongoose.model('Title', titleSchema, 'Titles');
