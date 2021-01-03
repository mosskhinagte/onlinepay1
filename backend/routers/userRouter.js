import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get('/send', expressAsyncHandler (async (req, res) => {
    const createUsers = await User.insertMany(data.users);
    res.send({ createUsers });

}));
export default userRouter;