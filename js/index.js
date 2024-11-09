

var allQuotes = [

    {
        quotes : "“So many books, so little time.”",
        author :"-- Frank Zappa"
    },
    {
        quotes : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author :"-- Frank Zappa"
    },
    {
        quotes : "“A room without books is like a body without a soul.”",
        author :"-- Marcus Tullius Cicero"
    },
    {
        quotes : "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        author :"-- Bernard M. Baruch"
    },
    {
        quotes : "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author :"-- Dr. Seuss"
    },
    {
        quotes : "“You only live once, but if you do it right, once is enough.”",
        author :"-- Mae West"
    },
    {
        quotes : "“Be the change that you wish to see in the world.”",
        author :"-- Mahatma Gandhi"
    },
    {
        quotes : "“In three words I can sum up everything I've learned about life: it goes on.”",
        author :"-- Robert Frost"
    },
    {
        quotes : "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
        author :"-- Albert Camus"
    }

];


var lastQuoteIndex = -1;

function generateQuote(){

    do {
       var quoteIndex = Math.floor(Math.random() * allQuotes.length);
       
    } while (quoteIndex == lastQuoteIndex);

    var quote = allQuotes[quoteIndex].quotes;
    var author = allQuotes[quoteIndex].author;
    
    lastQuoteIndex = quoteIndex ;

    
    document.getElementById('quoteOutput').innerHTML = quote;
    document.getElementById('authorOutput').innerHTML = author;
    
}
