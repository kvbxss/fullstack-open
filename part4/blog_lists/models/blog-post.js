const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

postsSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Posts", postsSchema);
