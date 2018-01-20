const
    express = require('express'),
    adminRouter = new express.Router(),
    adminCtrl = require('../controllers/admin.js'),
    verifyToken = require('../serverAuth.js').verifyToken
//


adminRouter.route('/')
    .get(adminCtrl.index)
    .post(adminCtrl.create)
//

adminRouter.route('/:id')
    .get(adminCtrl.show)
    .patch(adminCtrl.update)
    .delete(adminCtrl.destroy)
//

module.exports = adminRouter