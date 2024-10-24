const asyncWrapper = require("../middleware/async-wrapper");
const Task = require("../models/Task");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(201).send(tasks);
});
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.send(task);
});
const updateTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body);
  if (!task) return res.status(404).send("Task not found");
  res.status(200).send(task);
});
const deleteTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) return res.status(404).send("Task not found");
  res.status(200).send(task);
});
const getTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOne({ _id: id });
  if (!task) return res.status(404).send("Task not found");
  res.status(200).send(task);
});

module.exports = { getAllTasks, createTask, updateTask, deleteTask, getTask };
