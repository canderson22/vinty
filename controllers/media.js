const Media = require('../models/Media.js')

module.exports = {
    index: (req, res) => {
        Media.find({}, (err, allMedia) => {
            if (err) return console.log(err)

            res.json(allMedia);
        })
    },

    show: (req, res) => {
        Media.findById(req.params.id, (err, media) => {
            if (err) return console.log(err)
            res.json(media)
        })
    },

    create: (req, res) => {
        Media.create(req.body, (err, newMedia) => {
            if (err) return console.log(err)
            res.json(newMedia)
        })
    },

    update: (req, res) => {
        Media.findById(req.params.id, (err, media) => {
            Object.assign(media, req.body)
            media.save((err, updatedMedia) => {
                if (err) return console.log(err)
                res.json(updatedMedia)
            })
        })
    },

    destroy: (req, res) => {
        Media.findByIdAndRemove(req.params.id, (err, media) => {
            if (err) return console.log(err)
            res.json({success: true, message: 'Your content has been deleted.'})
        })
    }
}