const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
    {
        JobRole:{
            require: true,
            type: String,
        },
        JobCompanyName:{
            require: true,
            type: String,
        },
        JobLocation:{
            require: true,
            type: String,
        },
        JobLink:{
            require: true,
            type: String,
        }
    },
    {
        collection: "Job"
    }
)
    
module.exports = mongoose.model("Job", JobSchema)