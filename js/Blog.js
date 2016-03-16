exports.Blog = function(title, body){
  this.title = title;
  this.body = body;
};

exports.Blog.prototype.countWords = function(){
  console.log(body);
  var bodyArr = this.body.split(" ");

  var wordCount = 0;

  bodyArr.forEach(function() {
    wordCount++;
    console.log("things and stuff");
  });

  return wordCount;
};
