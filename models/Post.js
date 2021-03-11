const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: { //automatically created from localstorage
        type: String,
        required: [true, 'Please add a author'],
        unique: true,
        maxlength: [40, 'Title cannot be more than 40 characters']
    },
    title: { //USER
        type: String,
        required: true,
        maxlength: [300, 'Title cannot be more than 300 characters']
    },
    content: { //USER
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
    tags: [ //array of objects USER
        {
            type: String
        }
    ],
    likes: { //autmatically set set
        type: Number
    },
    comments: [{ //empty array
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