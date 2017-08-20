const express = require('express');
const router = express.Router();
const taskModel = require('./taskModel.js');

router.post('/api/uid/:uid/tasks/add', (req, res) => {
    let newTask = new taskModel({
        userId: req.params.uid,
        createDate: new Date().getTime(),
        text: req.body.text
    });

    console.log('body:', req.body);

    newTask.save().then((obj)=>{
        console.log('obj', obj);
        return res.send(obj);
    }, (error)=>{
        console.log('error', error);
        return res.status(500).send(error);
    })
});

router.get('/api/uid/:uid/tasks', (req, res) => {
    console.log(req.params)

    taskModel.find({ userId: req.params.uid }).then(
        (tasks) => { res.send(tasks) },
        (err) => { res.status(400).send({ err, msg: 'db error' }) }
    );
});

router.post('/api/uid/:uid/remove', (req, res) => {
    console.log('params', req.params.uid);
    console.log('body:', req.body);
    // taskModel.find(req.params.uid)
});



module.exports = router;