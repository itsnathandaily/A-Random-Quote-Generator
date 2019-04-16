/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



//array of 5 quote objects
var quotes = [
  
  {
    quote: "Let us sacrifice our today so that our children can have a better tomorrow.",
    source: "A. P. J. Abdul Kalam",
    citation: "https://www.brainyquote.com/authors/a_p_j_abdul_kalam",
    year: ""
  },
  {
    quote: "The scariest moment is always just before you start.",
    source: "Stephen King",
    citation: "http://wisdomquotes.com/inspirational-quotes/",
    year: "2012"
  },
  {
    quote: "Think Big And Don’t Listen To People Who Tell You It Can’t Be Done. Life’s Too Short To Think Small.",
  source: "Tim Ferriss",
  citation: "Instagram",
  year: ""

  },
  {
    quote: "We become what we think about",
    source: "Earl Nightingale",
    citation: "",
    year :""
  },
  {
    quote: "Those who dare to fail miserably can achieve greatly.",
    source: "John F.Kennedy",
    citation: "President John F.Kennedy's Inaugural Address",
    year :"1960"
  }];
//console.log(quotes);



//this function randomly selects a quote from the array of quote objects

function getRandomQuote(){
 let randomNumber = Math.floor(Math.random() * Math.floor(quotes.length));
 return quotes[randomNumber];
}




// this function appends the quote to an html string template
// the string sits in variable htmlString
function printQuote(){
  var randomQuote = getRandomQuote();
//console.log(randomQuote);

//htmlString is always empty at first
var htmlString = "";
//then it gets appended with html and the quote and source within the quote object
htmlString += "<p class=\"quote\">"+randomQuote.quote+"</p>"+"<br> ";
htmlString+= "<p class=\"source\">"+randomQuote.source;

//if there is a citation in the quote object, append it to htmlString
if(randomQuote.citation!==""){
htmlString+= "<span class=\"citation\">"+randomQuote.citation+"</span>";
}

//if there is a year in the quote object, append it to htmlString
if(randomQuote.year!==""){
  htmlString+= "<span class=\"year\">"+randomQuote.year+"</span>";
}
//close the html template with the closing paragraph tag
htmlString +="</p>";

//display htmlString in the 'quote-box' element
document.getElementById('quote-box').innerHTML = htmlString;
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
