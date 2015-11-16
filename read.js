$(document).ready(function(){
});

// var wpm = 230;

var wpm = 0;

var readTime = {



configWPM: function (currVal){
  // var wpm = 0;
  wpm = currVal;
  // console.log(currVal);
},

getWPM: function (){
  // var wpm = 0;
  // console.log(wpm);
  return wpm;
},

convertToArray: function(body){
  // console.log(body);
  return body;
},

getTextFromNodes: function (body){
  //.innerhtml?
  // console.log($(body).text());
  return $(body).text();
},

removePunctuation: function(string){
  //will need to remove all spaces
  //then run a loop to sort out any other other characters
  //then add into another string (see original speedreader project)

  var array = string.split("");
  var sortString = _.filter(array, function(currVal){
  if ((currVal != "!") && (currVal != "?") && (currVal != "/n") && (currVal != ".") && (currVal != "-") && (currVal != ",") && (currVal != "")){
  // console.log(sortString);
  return currVal;
}
});
var newString = sortString.join('');
// console.log(newString);
return newString;
},

countWords: function(string){
  var newCount = string.split(" ");
  // console.log(newCount);
  return newCount.length;

},
calcWPM: function(currVal){
  //use math.round for rounding to nearest whole number
  return  Math.round(currVal /wpm) + " minute read";
},



};
