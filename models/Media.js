const 
    mongoose = require('mongoose'),
    mediaSchema = new mongoose.Schema({
        title: { type: String, required: true},
        category: { type: String, required: true},
        subCategory: { type: String, required: true},
        content: { type: String },
        recycle: { type: Boolean },
        sell: { type: Boolean },
        sendBack: { type: Boolean }
    })
//

const Media = mongoose.model('Media', mediaSchema)

module.exports = Media