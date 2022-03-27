let regButton = document.querySelector(".schot")
regButton.addEventListener("click", (e) => { 
    let ar = document.querySelector(".powers-a").value;
    let bu = document.querySelector(".powers-b").value;
    let c = ar ** bu
    document.querySelector(".powers-answer").textContent = c
})
