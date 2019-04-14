/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



var quote1 ={
  quote: "Let us sacrifice our today so that our children can have a better tomorrow.",
  source: "A. P. J. Abdul Kalam",
  citation: "https://www.brainyquote.com/authors/a_p_j_abdul_kalam",
  year: ""
};
var quote2 = {
  quote: "The scariest moment is always just before you start.",
  source: "Stephen King",
  citation: "http://wisdomquotes.com/inspirational-quotes/",
  year: "2012"
};
var quote3 = {
  quote: "Think Big And Don’t Listen To People Who Tell You It Can’t Be Done. Life’s Too Short To Think Small.",
  source: "Tim Ferriss",
  citation: "Instagram",
  year: ""
};

var quote4= {
  quote: "We become what we think about",
  source: "Earl Nightingale",
  citation: "",
  year :""
};
var quote5= {
  quote: "Those who dare to fail miserably can achieve greatly.",
  source: "John F.Kennedy",
  citation: "President John F.Kennedy's Inaugural Address",
  year :"1960"
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


