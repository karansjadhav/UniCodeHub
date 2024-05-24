const mongoose = require('mongoose');

const InterviewSchema = new mongoose.Schema(
    {
        InterviewId:{
            require: true,
            type: String,
        },
        CompanyName:{
            require: true,
            type: String,
        },
        Role:{
            require: true,
            type: String,
        },
        Location:{
            require: true,
            type: String,
        },
        Salary:{
            require: true,
            type: String,
        },
        Round:{
            require: true,
            type: String,
        },
        Date:{
            require: true,
            type: String,
        },
        CompanyImage:{
            require: true,
            type: String,
        },
        InterviewDetail:{
            require: true,
            type: String,
        },
        InterviewStudentId:{
            require: true,
            type: String,
        },
        Verdict:{
            require: true,
            type: String,
        }
    },
    {
        collection: "Interview"
    }
)
    
module.exports = mongoose.model("Interview", InterviewSchema)