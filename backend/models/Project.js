const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
    {
        ProjectName:{
            require: true,
            type: String,
        },
        ProjectDetail:{
            require: true,
            type: String,
        },
        ProjectLink:{
            require: true,
            type: String,
        },
        ProjectImage:{
            require: true,
            type: String,
        },
        ProjectStudentEmail:{
            require: true,
            type: String,
        }
    },
    {
        collection: "Project"
    }
)
    
module.exports = mongoose.model("Project", ProjectSchema)