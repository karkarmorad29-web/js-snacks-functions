/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels(word));



// Dichiara la funzione qui.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}




// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));




//Risultato atteso se si passa 'javascript': 3 (a, a, i)