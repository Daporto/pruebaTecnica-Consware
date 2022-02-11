const mongoose = require("mongoose");

const collection = "users";

const objectSchema = {
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  tasks: [
    {
      title: String,
      description: String,
      priority: Number,
      creationDate: {type: Date, default: new Date()},
      state: {type: String, default:"Pendiente"},
    },
  ],
};
const schema = new mongoose.Schema(objectSchema);

const User = mongoose.model(collection, schema);

module.exports = User;
