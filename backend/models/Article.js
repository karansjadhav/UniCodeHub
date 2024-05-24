const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema(
    {
        ArticleName:{
            require: true,
            type: String,
        },
        ArticleDetail:{
            require: true,
            type: String,
        },
        ArticleImage:{
            require: true,
            type: String,
        },
        ArticleStudentId:{
            require: true,
            type: String,
        },
    },
    {
        collection: "Article"
    }
)
    
module.exports = mongoose.model("Article", ArticleSchema)