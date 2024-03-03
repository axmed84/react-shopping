import mongoose from 'mongoose';

const { Schema } = mongoose

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        validate: [value => value.length <500, 'content should be up to 500 charecters']
    },
    image: {
        type: String,
        default: null
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    
})
const User = mongoose.model('Post', postSchema)
export default User;