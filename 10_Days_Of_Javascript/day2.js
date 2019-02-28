/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {

    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var consonants = "";
    for (var i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        }
        else {
            consonants += s[i];
        }
    }
    for (var i = 0; i < consonants.length; i++) {
            console.log(consonants[i]);
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}