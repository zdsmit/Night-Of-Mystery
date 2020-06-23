const BASE_URL = "http://localhost:3000"
const SCENARIO_URL = `${BASE_URL}/scenarios`

let heroName
let heroineName
let itemType

function getScenario(id) {
  fetch(SCENARIO_URL)
  .then(res => res.json())
  .then(scenarios => {
    scenarios.data.forEach(scenario => {
      if (scenario.id == id) {createScenario(scenario)}
    })
  })
}

document.getElementById("start-button").addEventListener("click", function(event) {
  event.preventDefault()
  heroName = document.getElementById("male-first-name").value
  heroineName = document.getElementById("female-first-name").value
  itemType = document.getElementById("object").value
  getScenario(1)
})

function createScenario(scenario) {
  document.querySelector("header").innerHTML = ""
  document.querySelector("main").innerHTML = ""

  let hero = new Hero(heroName)
  let heroine = new Heroine(heroineName)
  let item = new Item(itemType)

  let div = document.createElement("div")

  let p = document.createElement("p")
  p.setAttribute("class", "scenario_text")
  let alteredText = insertOption(scenario.attributes.text, hero.name)
  p.innerText = alteredText
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

let insertOption = function(text, name) {
  let split = text.split(" ")
  split.forEach(word => {
    if (word == "Paul") {
      split.splice(split.indexOf(word), 1, name)
    }
  })
  return split.join(" ")
}

class Hero {

  constructor(name) {
    this.name = name
  }

}


class Heroine {

  constructor(name) {
    this.name = name
  }

}


class Item {

  constructor(name) {
    this.name = name
  }

}