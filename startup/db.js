const mongoose = require('mongoose');
const { DB } = require('../config');

module.exports = function () {
	mongoose.connect(DB, {
		useCreateIndex: true,
		useUnifiedTopology: true,
		useNewUrlParser: true,
		keepAlive: true,
		useFindAndModify: false
	}).then(() => console.log(`Connected to mongoDB`));
}