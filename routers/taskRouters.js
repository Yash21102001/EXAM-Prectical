const express = require('express');
const {uploadImage} = require('../middlewares/multeriamge')
const taskCtl = require('../controllers/task_controller');

const taskRouter = express.Router();

taskRouter.get('/',taskCtl.homePage);
taskRouter.get('/add_task',taskCtl.addtaskPage);
taskRouter.post('/add_task',taskCtl.add_task);
taskRouter.get('/view_task',taskCtl.viewtaskPage);  
taskRouter.get('/deletetask/:id',taskCtl.deletetask);
taskRouter.post('/edit_task/:id',taskCtl.edittaskPage);

taskRouter.get('/edit_task/:id',taskCtl.edittask);

taskRouter.get('/login',taskCtl.loginPage);
taskRouter.post('/login',taskCtl.login);


module.exports = taskRouter;