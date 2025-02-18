const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: String, // String is shorthand for {type: String}
  address: {
    province: String
  },
},{
    collection: 'companies'
});

const company = mongoose.model('Company', schema);

module.exports = company;