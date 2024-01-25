import "./style.css"
import request from "./request/script"
import showWarning from "./warning/script"

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()
  const inputSearch = document.querySelector("#search")
  const city = inputSearch.value
  if (city) {
    document.querySelector(".responseClimate").style.opacity = "0"
    showWarning("Carregando...")
    const apikey = "d06cdb298fafc83c520d5ab677fc477e"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      city
    )}&units=metric&appid=${apikey}&units=metric&lang=pt_br`

    request(url)
    inputSearch.value = ""
  } else {
    showWarning("Digite uma Cidade...")
    document.querySelector(".responseClimate").style.opacity = "0"
  }
})

