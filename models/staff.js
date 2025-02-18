const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {type: String, required: true, trim: true}, // String is shorthand for {type: String}
  salary: {type: Number},
  created: {type: Date, default: Date.now}
},{
    collection: 'staffs'
});

const staff = mongoose.model('Staff', schema);

module.exports = staff;