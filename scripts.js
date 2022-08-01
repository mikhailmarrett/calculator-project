let display = document.getElementById("output")
let buttons = Array.from(document.querySelectorAll("button"))


buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {


      case "AC":
        display.innerText = "0"
        break
      case "DEL":
        if (display.innerText > 0){
        display.innerText = display.innerText.slice(0, -1)
        } 
        break
      case "=":
        display.innerText = eval(display.innerText)
        break
      default:
        display.innerText += e.target.innerText
    }
  })
})
