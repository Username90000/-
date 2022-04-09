let regButton = document.querySelector(".schot")
regButton.addEventListener("click", (e) => {  
    let ar = document.querySelector(".powers-a").value;
    let bu = document.querySelector(".powers-b").value;
    let c = ar ** bu
    document.querySelector(".powers-answer").textContent = c
})
let regerButton = document.querySelector(".schot2")
regerButton.addEventListener("click", (e) => { 
    let ar = document.querySelector(".per-a").value;
    let bu = document.querySelector(".per-b").value;
    let c = 2 * ar + bu * 2
    document.querySelector(".per-answer").textContent = c
})
let regeresButton = document.querySelector(".schot3")
regeresButton.addEventListener("click", (e) => { 
    let ar = document.querySelector(".S-a").value;
    let bu = document.querySelector(".S-b").value;
    let c = ar * bu
    document.querySelector(".S-answer").textContent = c
})

