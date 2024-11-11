const { Schema, model } = require("mongoose");
const TodoSchema = new Schema(
  {
    content: {
      type: String,
      reduired: true,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    // versionKey:false,
    timestamps: true,
  }
);
const Todo = model("todo", TodoSchema);
module.exports = Todo
