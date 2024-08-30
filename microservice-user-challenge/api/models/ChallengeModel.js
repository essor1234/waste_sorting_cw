const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChallenegSchema = new Schema(
    {
        
        description: {
            type: String,
            default: 'none'
        },
        level: {
            type: String,
            enum : ['easy,', 'medium', 'hard'],
            default: 'easy'
        },
        score: {
            type: Number,
            default: 0
        },
        name: {
            type: String,
            required: "Challenge name cannot be blank"
        },
        creator: {
            type: String,
            required: "Creator name cannot be blank"
        }
    },
    // specifying a name for the collection
    {collection: 'challenge'}
)

// solidify this Schema as a data model with mongoose and 
// export it from this file
module.exports = mongoose.model('Challenge', ChallenegSchema)