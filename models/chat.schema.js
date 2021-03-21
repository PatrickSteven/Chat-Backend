const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const BucketMessages = require('../models/bucketMessages.schema')

const ChatSchema = mongoose.Schema({
    users: {
        type: [ObjectId],
        ref: 'User',
        require: true
    },
    lastMessages: BucketMessages,
    buckets: [BucketMessages],
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Chat', ChatSchema);
