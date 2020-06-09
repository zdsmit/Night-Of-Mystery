const BASE_URL = "http://localhost:3000"
const SCENARIO_URL = `${BASE_URL}/scenarios`

function getScenario() {
  fetch(SCENARIO_URL)
  .then(res => res.json())
  .then(scenarios => {
    scenarios.data.forEach(scenario => {
      createScenario(scenario)
    })
  })
}

document.addEventListener("DOMContentLoaded", () => {
  getScenario()
})

function createScenario(scenario) {
    let div = document.createElement('div')
  //let body = document.getElementsByTagName("BODY")

  let p = document.createElement("p")
  p.setAttribute("class", "scenario_text")
  p.innerText = scenario.attributes.text
  div.appendChild(p)
  document.querySelector("main").appendChild(div)
  //body.appendChild(p)
}