/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



var quote1 ={
  quote: "Let us sacrifice our today so that our children can have a better tomorrow.",
  source: "A. P. J. Abdul Kalam",
  citation: "",
  year: ""
};
var quote2 = {
  quote: "quote 2",
  source: "julius anybody",
  citation: "19",
  year: "1976"
};
var quote3 = {
  quote: "quote 3",
  source: "julius anybody",
  citation: "",
  year: ""
};

var quote4= {
  quote: "quote 4",
  source: "julius anybody",
  citation: "",
  year :""
};
var quote5= {
  quote: "quote 5",
  source: "julius anybody",
  citation: "",
  year :""
};
var quotes = [quote1,quote2,quote3,quote4,quote5];
//console.log(quotes);





function getRandomQuote(){
 let randomNumber = Math.floor(Math.random() * Math.floor(quotes.length));
 return quotes[randomNumber];
}





function printQuote(){
  var randomQuote = getRandomQuote();
console.log(randomQuote);
var htmlString = "";
htmlString += "<p class=\"quote\">"+randomQuote.quote+"</p>"+"<br> ";
htmlString+= "<p class=\"source\">"+randomQuote.source;
if(randomQuote.citation!==""){
htmlString+= "<span class=\"citation\">"+randomQuote.citation+"</span>";
}
if(randomQuote.year!==""){
  htmlString+= "<span class=\"year\">"+randomQuote.year+"</span>";
}

htmlString +="</p>";
document.getElementById('quote-box').innerHTML = htmlString;
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);


