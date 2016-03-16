var Blog = require('./../js/Blog.js').Blog;
var moment = require('moment');
// var apiKey = require('./../.env').apiKey;

$(document).ready(function(){

  $('#blog').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=3').then(function(response) {

      fillContainer = function(html) {
        $('#body').html(html);
      },
      oops = function() {
        console.log('Where did all the dinosaurs go?');
      };
      var body = response;
      console.log(body);
      var entry = new Blog(title, body);
      var count = entry.countWords();
      $('#your_title').text("Title: " + title);
      $('#your_body').text("Here is your blog entry for today: " + body);
      $('#word-count').text(count);
      $('#date').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    });
  });
  });
  // jQuery.ajax example
  // var getDinoTitle = $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=1&words=2'),
  //     fillContainer2 = function(html) {
  //       $('#title').html(html);
  //     },
  //     oops = function() {
  //       console.log('Where did all the dinosaurs go?');
  //     };
  // var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=text&paragraphs=3'),
  //     fillContainer = function(html) {
  //       $('#some-awesome-container').html(html);
  //     },
  //     oops = function() {
  //       console.log('Where did all the dinosaurs go?');
  //     };

  // getDinoTitle.then(fillContainer2, oops);
  // getDinos.then(fillContainer, oops);
