//Create and export User model schema
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email address is not valid']
        },
        thoughts: [ {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [ {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

//virtual called friendCount to return number of friends
userSchema.virtual('friendCount').get(function () {
        return this.friends.length;
});


const User = model('user', userSchema);
module.exports = User;