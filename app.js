

const display = document.querySelector(".container")


const quest = {
    topishmoq: "pishirsang osh bo'lur pishirmasang qush",
    word:"tuhum"

}



const word = quest.word.toUpperCase().split("")
const topishmoq = document.querySelector(".t").innerText= quest.topishmoq
topishmoq.innerText 

word.forEach(() => {
    const box = document.createElement("div")
    box.classList.add("box")
    box.innerText = "?"
    display.appendChild(box)
})






document.addEventListener("keydown", (event) => {
    const guessedLetter = event.key.toLocaleUpperCase();
    let correctGuess = false;
    word.forEach( (Letter,i) => {
        if (Letter === guessedLetter){
            const boxes = document.querySelectorAll(".box")
            boxes[i].textContent = guessedLetter;
            correctGuess = true;
            boxes[i].style = "animation: rotate 1s forwards; "
        }
        
    });

})