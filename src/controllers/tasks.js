const User = require("../database/models/users");
const UserSerializer = require("../serializers/UserSeralizer");

const createTask = async (req, res, next) => {
  try {
    const body = req.body;
    const taskPayload = {
      title: body.title,
      description: body.description,
      priority: body.priority,
    };
    const response = await User.findOneAndUpdate(
      { username: body.username },
      { $push: { tasks: taskPayload } }
    ).exec();
    res.json(new UserSerializer(response));
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const body = req.body;
    const taskPayload = {
      title: body.title,
      description: body.description,
      priority: body.priority,
    };
    const user = await User.findOne({ username: body.username }).exec();
    let tasks = [...user.tasks];
    let taskIndex = user.tasks.findIndex((task) => task._id == body.taskId);
    tasks[taskIndex] = taskPayload;
    user.tasks = tasks;
    const userUpdated = await user.save();
    res.json(userUpdated);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await User.findOne({ username: body.username }).exec();
    let tasks = [...user.tasks];
    let taskIndex = user.tasks.findIndex((task) => task._id == body.taskId);
    tasks.splice(taskIndex,1);
    user.tasks = tasks;
    const userUpdated = await user.save();
    res.json(userUpdated);
  } catch (error) {
      next(error)
  }
};

const getTasks = async (req, res, next) => {
    try {
      const body = req.body;
      const user = await User.findOne({ username: body.username }).exec();
      let tasks = [...user.tasks];
      res.json({status:200, data: tasks})
    } catch (error) {
        next(error)
    }
  };

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  getTasks
};
