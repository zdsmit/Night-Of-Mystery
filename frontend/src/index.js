const BASE_URL = "http://localhost:3000"
const SCENARIO_URL = `${BASE_URL}/scenarios`
const USERS_URL = `${BASE_URL}/users`

let userName
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

document.addEventListener("DOMContentLoaded", () => {
  let div = document.createElement("div")
  let h2 = document.createElement("h2")
  let ul = document.createElement("ul")
  h2.innerText = "Users"

  fetch(USERS_URL)
  .then(res => res.json())
  .then(users => {
    users.data.forEach(user => {
      if (!!user.attributes.name) {
        let li = document.createElement("li")
        li.innerText = user.attributes.name
        ul.appendChild(li)
      }
    })
  })

  div.appendChild(h2)
  div.appendChild(ul)
  document.querySelector("main").appendChild(div)
})

document.getElementById("start-button").addEventListener("click", function(event) {
  event.preventDefault()
  userName = document.getElementById("user-name").value
  
  let userConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: userName
    })
  }

  heroName = document.getElementById("male-first-name").value
  heroineName = document.getElementById("female-first-name").value
  itemType = document.getElementById("object").value
  fetch(USERS_URL, userConfig);
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
  let alteredText = nounFilter(scenario.attributes.text, hero.name, heroine.name, item.name)
  p.innerText = alteredText
  if (scenario.id == 7) {
    p.style.color = "red"
  }
  div.appendChild(p)

  let ol = document.createElement("ol")
  scenario.attributes.responses.forEach(response => {
    let li = document.createElement("li")
    let responseText = nounFilter(response.text, hero.name, heroine.name, item.name)
    li.innerText = responseText
    ol.appendChild(li)

    li.addEventListener("click", function() {
      div.removeChild(p)
      getScenario(response.result)
    })
  })

  p.appendChild(ol)
  document.querySelector("main").appendChild(div)
}

let insertOption = function(text, oldName, newName) {
  let split1 = text.split(" ")
  split1.forEach(word => {
    let split2 = word.split("*")
    if (split2[1] == oldName) {
      split2.splice(1, 1, newName)
      split1.splice(split1.indexOf(word), 1, split2.join(""))
    }
  })
  console.log(split1.join(" "))
  return split1.join(" ")
}

let nounFilter = function(text, maleName, femaleName, itemType) {
  let filter1 = insertOption(text, "Paul", maleName)
  let filter2 = insertOption(filter1, "Lucy", femaleName)
  let filter3 = insertOption(filter2, "ring", itemType)
  return filter3
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

//(/[.,\/#!$%\^&\*;:{}=\-_`~()]/)