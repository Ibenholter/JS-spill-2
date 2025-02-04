const containerElm = document.querySelector(".container")

for (let i = 0; i < 1000; i++) {
    const divElm = document.createElement("div")
    containerElm.appendChild(divElm)
}