const task = require('../models/task-Schema');
const fs = require('fs')


module.exports.homePage = (req, res) => {
    return res.render('index');
}

module.exports.addtaskPage = async(req,res)=>{
    return res.render('./pages/add_task');
}

module.exports.add_task = async (req, res) => {
    try {
        if (req.file) {
            req.body.image = req.file.path
        }
        // console.log(req.file);
        console.log(req.body);

        let data = await task.create(req.body);
        return res.redirect('/');
    } catch (error) {
        console.log(error);
        return res.redirect('/');
    }
}

module.exports.viewtaskPage = async (req, res) => {
    let data = await task.find();
    return res.render('./pages/view_task', { data })
}

module.exports.deletetask = async (req, res) => {
    try {
        let { id } = req.params;
        let deleteData = await task.findByIdAndDelete(id);
        console.log('Task Delelet..');
        return res.redirect(req.get('Referrer' || '/'))
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer' || '/'))
    }
}

module.exports.edittask = async (req, res) => {
    try {
        let { id } = req.params;
        let productData = await task.findById(id);
        return res.render('./pages/edit_task', { productData });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.edittaskPage = async (req, res) => {
    try {
        let { id } = req.params;
        if (req.file) {
            req.body.image = req.file.path;
            fs.unlinkSync(req.body.oldImage)
        }
        let taskData = await task.findByIdAndUpdate(id, req.body)
        console.log(taskData);
        
        return res.redirect('/view_task')
    } catch (error) {
        console.log(error);
        return res.redirect(req.get('Referrer' || '/'))
    }
}


module.exports.loginPage = (req, res) => {
    return res.render('./pages/login');
}

module.exports.login = async (req, res) => {
    try {
        let { username, password } = req.body;
        let user = await User.findOne({ username })
        
        if(user)
        {
            if(user.password == password)
            {   
                res.cookie('userId',user.id);
                return res.redirect('/');
            }
            else
            {
                return res.redirect('back');
            }
        }
        else
        {
            return res.redirect('back');
        }

    } catch (error) {
        console.log(error);
        res.redirect('back')
    }
}