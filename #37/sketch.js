let scrtxt;
let words;
let wordlist = [];

function preload() {
  srctxt = loadStrings('src.txt');
}

function setup() {
  noCanvas();
  
  words = srctxt.join(" ");
  wordlist = splitTokens(words, ' ,.?!—');
  
  let seed = select("#seed");
  let submit = select("#submit");
  
  submit.mousePressed(function () {
    diastic(seed, wordlist);
    
  });

}

function diastic (seed, src) {
  let c = seed.value();
  let results = "";
  let counter = 0;
  
  for (let i = 0; i < c.length; i++) {
    let char = c.charAt(i);
    for(let j = counter; j < src.length; j++) {
      if (src[j].charAt(i) == char) {
        results += src[j];
        results += " ";
        counter += 1;
        break;
      }
    }
  }
  createP(results);
}
