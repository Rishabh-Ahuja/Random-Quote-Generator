// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// creating a array of objects which will contain quotes
var arrayQ = [
    {
        quote: "The material world is a dangerous place to be in. It's dangerous because there is a temptation of illusory energy; there is danger at every step."
        , source: "HH GOPAL KRISHNA GOSWAMI"
        , citation: "ISKCON DESIRE TREE"
        , year: 2016
    }, {
        quote: "If you carry out the order of your spiritual master then the Lord will be so pleased that He will come to see you."
        , source: "HH GOPAL KRISHNA GOSWAMI"
        , citation: "ISKCON DESIRE TREE"
        , year: 2013
    }, {
        quote: "Our vaccination is chanting the names of Krishna, Hearing the Bhagavad-gita and Srimad Bhagavatam, and thinking of Krishna all the time."
        , source: "HH GOPAL KRISHNA GOSWAMI"
        , citation: "ISKCON DESIRE TREE"
        , year: 2003
    }, {
        quote: "Vairagya means that when the opportunity for sense gratification is there, I voluntarily abstain from it."
        , source: "HH GOPAL KRISHNA GOSWAMI"
        , citation: "ISKCON DESIRE TREE"
        , year: 2006
    }, {
        quote: "Our quota is not sixteen rounds, but attentive sixteen rounds."
        , source: "HH GOPAL KRISHNA GOSWAMI"
        , citation: "ISKCON DESIRE TREE"
        , year: 2009
    }, {
        quote: "Guru is pleased when he sees that the disciple is showing the symptoms of Shudh Bhakti."
        , source: "HH GOPAL KRISHNA GOSWAMI"
        , citation: "ISKCON DESIRE TREE"
        , year: 2010
    }, {
        quote: "Devotional service is so simple, but devotees because of their material inclinations make it complicated."
        , source: "HH GOPAL KRISHNA GOSWAMI"
        , citation: "ISKCON DESIRE TREE"
        , year: 2011
    }, {
        quote: "Whatever we give to Krishna that will be remembered eternally, that will be appreciated eternally."
        , source: "HH GOPAL KRISHNA GOSWAMI"
    },

];
// created a print function
function print(message) {
    var output = document.getElementById('quote-box');
    output.innerHTML = message;
}
// generate a random number
function generateRandom(anything) {
    random = Math.floor(Math.random() * anything.length)
    return random
}
// random quote generator from the object
function getRandomQuote() {
    var quote = arrayQ[generateRandom(arrayQ)];
    return quote
};
//generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function ChangeColor() {
    var changeBackground = document.body.style.background = getRandomColor();
    var buttonBackground = document.getElementById('loadQuote').style.background = changeBackground;
}
// the main print quote function
function printQuote() {
    var randomQuote = getRandomQuote();
    var removeitems = arrayQ.pop(random);
    var arrayOfRemoved = [];
    arrayOfRemoved.push(removeitems);
    

    var arrayOfRemovedObject = arrayOfRemoved;
    console.log(arrayOfRemovedObject);
   
    ChangeColor();
    var theQuote = '<p class="quote">' + randomQuote.quote + '</p>';
    
    theQuote += '<p class="source">' + randomQuote.source;
    
    if (randomQuote.citation !== undefined) {
        theQuote += '<span class = "citation" >' + randomQuote.citation + '</span>' ;
    } 
    if (randomQuote.year !== undefined) {
        theQuote += '</span> <span class="year">' + randomQuote.year + '</span > </p>';
    }
    if(randomQuote === undefined) {
        randomQuote.push(arrayOfRemovedObject[random]);
    }
   
    print(theQuote);
}
//// after 9.5 seconds the print quote function is called
//setInterval(printQuote,1500)