const User = require('../database/models/users')
const UserSerializer = require('../serializers/UserSeralizer')

const createUser = async (req, res, next) => {
    const body = req.body;
    const userPayload = {
        username: body.username,
        password: body.password,
        name: body.name,
      };
    const newUser = new User(userPayload);
    const response = await newUser.save();
    res.json(new UserSerializer(response))
}

module.exports = {
    createUser
}