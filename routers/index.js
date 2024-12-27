const express = require('express');
const taskRouter = require('./taskRouters');
const router = express.Router();

router.use('/',taskRouter);


module.exports = router;