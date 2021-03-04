const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    password: {
        type: String,
        required: true,
        maxlength: [30, 'Description cannot be more than 200 characters']
    },
    email: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: new Date()
    },
    post: [{
            type: Schema.Types.ObjectId,
            ref: 'Post'
    }]
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);