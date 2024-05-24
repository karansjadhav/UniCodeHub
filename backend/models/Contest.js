const mongoose = require('mongoose');

const ContestSchema = new mongoose.Schema(
    {
        Platform: {
            require: true,
            type: String,
        },
        ContestName:{
            require: true,
            type: String,
        },
        ContestLink:{
            require: true,
            type: String,
        },
        ContestDate:{
            require: true,
            type: String,
        },
        ContestTime: {
            require: true,
            type: String,
        },
        Status: {
            require: true,
            type: String,
        },
    },
    {
        collection: "Contest"
    }
)
    
module.exports = mongoose.model("Contest", ContestSchema)