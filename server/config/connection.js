const mongoose = require('mongoose');

const URI = "mongodb+srv://booksearch:Coding2021$@cluster0.kfjad.mongodb.net/booksearch?retryWrites=true&w=majority"
mongoose.connect(URI || 'mongodb://localhost:27017/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
