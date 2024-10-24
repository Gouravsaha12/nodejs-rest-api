const mongoose = require("mongoose");

// Define the schema for a Task
const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Ensures that 'name' field is mandatory
      trim: true, // Removes leading and trailing spaces
      maxlength:[20,"name cannot exceed 20 characters"]
    },
    completed: {
      type: Boolean,
      default: false, // Defaults to 'false' if not provided
    },
  },
  { timestamps: true }
); // Adds 'createdAt' and 'updatedAt' fields automatically

module.exports = mongoose.model("Task", TaskSchema);