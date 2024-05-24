const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema(
    {
        ProblemId:{
            require: true,
            type: String,
        },
        ProblemName:{
            require: true,
            type: String,
        },
        ProblemLink:{
            require: true,
            type: String,
        }
    },
    {
        collection: "Problem"
    }
)
    
module.exports = mongoose.model("Problem", ProblemSchema)