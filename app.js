// Escribe tu código aquí.

const btnBigWord = document.getElementById("btnBigWords");
const list = document.getElementById("list");
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];


function bigwords (bigWord, myArray){
    const words = myArray.filter((word) => word.length > bigWord.length);
    console.log(words);
    return words;
}

function printArray (words){
    words.forEach(word => {
        console.log(word);
        let listHTML = `<li>${word}</li>`
        list.insertAdjacentHTML("beforeend", listHTML)
    });
}

btnBigWord.addEventListener("click", function (event){
    event.preventDefault();
    const bigWord = document.getElementById("bigWord").value; //'bocina';
    console.log(bigWord);
    const wordsArray = bigwords(bigWord, myArray);
    printArray(wordsArray);
});


//https://github.com/eduardojesus12/live-coding-1