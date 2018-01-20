const
    express = require('express'),
    mediaRouter = new express.Router(),
    mediaCtrl = require('../controllers/media.js'),
    verifyToken = require('../serverAuth.js').verifyToken
//

mediaRouter.use(verifyToken)
mediaRouter.route('/')
    .get(mediaCtrl.index)
    .post(mediaCtrl.create)
//

mediaRouter.route('/:id')
    .get(mediaCtrl.show)
    .patch(mediaCtrl.update)
    .delete(mediaCtrl.destroy)

module.exports = mediaRouter