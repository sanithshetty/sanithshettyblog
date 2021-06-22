const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required : true
    },
    snippet: {
        type: String,
        required : true
    },
    body: {
        type: String,
        required : true
    }
}, { timestamps: true });

//'Blog' same name as collection in singular
const Blog = mongoose.model('Blog',blogSchema );

module.exports = Blog;          //exporting to use it in other place
