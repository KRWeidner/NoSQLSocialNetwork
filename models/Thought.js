//Create and export Thought model schema
// also create the reaction schema which will only be used within the thought schema
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => formatDate(date)
        }
    }
)

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => formatDate(date)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
    }
);

//virtual called reactionCount to return number of reactions
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

//function used by getter method to format dates
function formatDate(date) {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
}

const Thought = model('thought', thoughtSchema);
module.exports = Thought;