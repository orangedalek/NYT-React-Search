var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
 	title: String,
 	unique: true
  },{
 	date: Date
  },{
  	url: String
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;