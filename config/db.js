const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// mongoose.set('useUnifiedTopology', true);

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connection....');
  } catch(err) {
    console.err(err.massage);
    process.exit(1);
  }
};

module.exports = connectDb;
