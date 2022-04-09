let poschButton = document.querySelector(".poschot1")
poschButton.addEventListener("click", (e) => { 
    let arb = document.querySelector(".m-a").value;
    let buz = document.querySelector(".m-b").value;
    let m = arb * buz
    document.querySelector(".m-answer").textContent = m
})
let posch1Button = document.querySelector(".poschot3")
posch1Button.addEventListener("click", (e) => { 
    let a = document.querySelector(".ob-a").value;
    let v = a * 22.4
    document.querySelector(".ob-answer").textContent = v
})
let posch2Button = document.querySelector(".poschot5")
posch2Button.addEventListener("click", (e) => { 
    let ao = document.querySelector(".k-a").value;
    let bo = document.querySelector(".k-b").value;
    let k = ao * bo
    document.querySelector(".k-answer").textContent = k 
})