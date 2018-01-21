const 
    mongoose = require('mongoose'),
    mediaSchema = new mongoose.Schema({
        title: { type: String, required: true},
        category: { type: String, required: true},
        subCategory: { type: String },
        content: { type: String },
        recycle: { type: Boolean },
        sell: { type: Boolean },
        sendBack: { type: Boolean },
        content: { type: String },
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
    })
//

const Media = mongoose.model('Media', mediaSchema)

module.exports = Media