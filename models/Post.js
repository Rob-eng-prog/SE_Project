const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: {
        type: String,
        required: [true, 'Please add a author'],
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    title: {
        type: String,
        required: true,
        maxlength: [300, 'Title cannot be more than 300 characters']
    },
    content: {
        type: String,
        required: true,
        maxlength: [3000, 'content cannot be more than 3000 characters']
    },
    imgs: [
        {
            type: String
        }
    ],
    dateCreated: {
        type: Date,
        default: new Date()
    },
    tags: [
        {
            type: String
        }
    ],
    likes: {
        type: Number
    },
    comments: [{
        text: { 
            type: String
        },
        likes: {
            type: Number
        },
        poster: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }]
})

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);