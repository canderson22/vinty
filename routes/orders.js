const 
    express = require('express'),
    ordersRouter = new express.Router(),
    User = require('../models/User')
//

ordersRouter.route('/:id')
    .post((req, res) => {
        User.findByIdAndUpdate(req.params.id, (err, user) => {
            if (err) return console.log(err)
            req.body.date = new Date()
            user.orders.push(req.body)
            user.save((err, updatedUser) => {
                console.log(updatedUser)
                res.json(updatedUser)
            })
        })
    })
//

module.exports = ordersRouter
