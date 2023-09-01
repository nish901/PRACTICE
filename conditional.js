let age = 50;

if (age <= 17) {
    console.log("Underage");
} else if (18 <= age && age <= 65) {
    console.log("between 18 and 65");
}else {
    console.log("out of range")
}


let result = (age>=18)? (age<=65 ?"over 18 and under 65": "over 65") :  "underage";
console.log(result)
