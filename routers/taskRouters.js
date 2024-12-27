const express = require('express');
const {uploadImage} = require('../middlewares/multeriamge')
const taskCtl = require('../controllers/task_controller');

const taskRouter = express.Router();

taskRouter.get('/',taskCtl.homePage);
taskRouter.get('/add_task',taskCtl.addtaskPage);
taskRouter.post('/add_task',uploadImage,taskCtl.add_task);
taskRouter.get('/view_task',taskCtl.viewtaskPage);  
taskRouter.get('/deletetask/:id',taskCtl.deletetask);
taskRouter.post('/edit_task/:id',uploadImage,taskCtl.edittaskPage);

taskRouter.get('/edit_task/:id',taskCtl.edittask);


module.exports = taskRouter;