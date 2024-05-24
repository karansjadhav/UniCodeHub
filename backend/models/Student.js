const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema(
    {
        StudentName:{
            require: true,
            type: String,
        },
        StudentEmail:{
            require: true,
            type: String,
        },
        Password:{
            require: true,
            type: String,
        },
        Leetcode:{
            require: true,
            type: String,
        },
        Codechef:{
            require: true,
            type: String,
        },
        Geeksforgeeks:{
            require: true,
            type: String,
        },
        Codeforce:{
            require: true,
            type: String,
        },
        Hackerrank:{
            require: true,
            type: String,
        },
        DP:{
            require: true,
            type: String,
        }
    },
    {
        collection: 'Student'
    }
)

module.exports = mongoose.model('Student', StudentSchema)