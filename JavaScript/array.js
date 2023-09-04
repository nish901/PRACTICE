const quote = ["I", "am", "your", "friend"];

console.log(quote);

console.log(quote[2]);


quote.pop("friend");
console.log(quote);

quote.push('father');
console.log(quote);

quote.unshift("luke");
console.log(quote);


let erroneousWord ="luke";
let lukeIsHere = quote.includes(erroneousWord);
console.log(lukeIsHere);

let lukeIsAt = "";

if (lukeIsHere == true) {
    lukeIsAt = quote.indexOf(erroneousWord)
    quote[lukeIsAt] = "no"
    console.log(quote)
}

let output = '';
for (let i = 0, j = quote.length; i < j; i++) {
    // the last word
    if (i === j - 1) {
        output += quote[i] + '!';
        // finding the index of the first word and adding a , next to that index
    } else if (quote[i] === 'No') {
        output += quote[i] + ', ';
    } else {
        // this refers to the middle words, and adds a space
        output += quote[i] + ' '  
    }
}
console.log(output)



let out = ''

// of for Array, in in object
for(const element of quote) {   
    out+= element+" " 

}

console.log(out+"!")



