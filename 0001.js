// Remove vowals from strings

let str = "This website is for losers LOL!";

function removeVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = str.split("").filter(el=>{
        return !vowels.includes(el.toLowerCase());
    }).join("");
    return result;
}

console.log(removeVowels(str));

let str2 = "No offense but,\nYour writing is among the worst I've ever read";
let str3 = "What are you, a communist?";

console.log(removeVowels(str2));
console.log(removeVowels(str3));