function responseMenu(data) {
  document.querySelector(".responseClimate").style.opacity = "1"
  document.querySelector(
    "#city"
  ).textContent = `${data.name}, ${data.sys.country}`
  document.querySelector("#temp").textContent = data.main.temp
  document.querySelector(
    "#iconTemp"
  ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  document.querySelector("#wind").textContent = data.wind.speed
  document.querySelector(
    ".lineWind"
  ).style.transform = `translate(-50%, -50%) rotate(${data.wind.deg}deg)`
}

export default responseMenu
