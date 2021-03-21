const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const BucketMessagesSchema = require('../models/message.schema')

const BucketMessagesSchema = mongoose.Schema({
    messages: [Message],
    usersStatus: [{
        userId: ObjectId,
        lastDelivered: Date,
        lastSeen: Date,
    }],
    size: Number
});

module.exports = mongoose.model('BucketMessages', BucketMessagesSchema);
