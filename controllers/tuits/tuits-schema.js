import mongoose from "mongoose";

const schema = mongoose.Schema({
    tuit: String,
    topic: String,
    username: String,
    handle: String,
    title: String,
    time: String,
    image: String,
    likes: Number,
    liked: Boolean,
    replies: Number,
    retuits: Number,
    dislikes: Number,
}, {collection: 'tuits'});

export default schema;

