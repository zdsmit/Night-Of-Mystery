const BASE_URL = "http://localhost:3000"
const SCENARIO_URL = `${BASE_URL}/scenarios`

function getScenario(id) {
  fetch(SCENARIO_URL)
  .then(res => res.json())
  .then(scenarios => {
    scenarios.data.forEach(scenario => {
      if (scenario.id == id) {createScenario(scenario)}
    })
  })
}

document.addEventListener("DOMContentLoaded", () => {
  getScenario(1)
})

function createScenario(scenario) {
  let div = document.createElement("div")

  let p = document.createElement("p")
  p.setAttribute("class", "scenario_text")
  p.innerText = scenario.attributes.text
  div.appendChild(p)

  let ol = document.createElement("ol")
  scenario.attributes.responses.forEach(response => {
    let li = document.createElement("li")
    li.innerText = response.text
    ol.appendChild(li)

    li.addEventListener("click", function() {
      div.removeChild(p)
      getScenario(response.result)
    })
  })

  p.appendChild(ol)
  document.querySelector("main").appendChild(div)
}
