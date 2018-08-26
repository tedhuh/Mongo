const mongoose = require("mongoose");

const schema = mongoose.Schema;

const articlesSchema = new schema ({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true,
    },
    note:{
        type: schema.Types.ObjectId,
        ref: "note"
    }
})

const Article = mongoose.model("Article", articlesSchema);
module.exports = Article;