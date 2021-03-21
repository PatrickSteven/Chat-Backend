const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const MessageSchema = mongoose.Schema({
    from: {
        userId: {
            type: ObjectId,
            ref: 'User',
            required: true
        }
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Message', MessageSchema);
