var api_key = 'SEM3302FF226148DFDCC6175D9092185B447';
var api_secret = 'NTFkODUyODRjZmJlMWJmN2Y5ZTg3MWQzMzlkNTIyZmE';

const Media = require('../models/Media.js')
const sem3 = require('semantics3-node')(api_key,api_secret)

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
        if (req.body.upc) {
            sem3.products.products_field( "upc", req.body.upc);
            sem3.products.get_products(
                function(err, products) {
                    if (err) {
                        console.log("Couldn't execute request: get_products");
                        return;
                    }
                    var product = JSON.parse(products)
                    var title = product.results[0].name
                    var category = product.results[0].category
                    var images = product.results[0].images[0]

                    var media = {
                        title,
                        category,
                        images,
                        user: req.body.user
                    }
                    // res.json(media)
                    Media.create(media, (err, newMedia) => {
                        if (err) return console.log(err)
                        res.json(newMedia)
                    })
                }
            );
            return
        }

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