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
    if (i === j - 1) {
        output += quote[i] + '!';
    } else if (quote[i] === 'No') {
        output += quote[i] + ', ';
    } else {
        output += quote[i] + ' '
    }
}
console.log(output)



let out = ''

for(const element of quote) {
    out+= element+" " 

}

console.log(out+"!")



