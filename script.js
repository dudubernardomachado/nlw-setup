const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const toDay = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //const toDay = "01/02"
  const dayExists = nlwSetup.dayExists(toDay)

  //alert(dayExists)
  if (dayExists) {
    alert("Dia já incluso!")
    return
  }
  alert("Dia adicionado com sucesso!")
  nlwSetup.addDay(toDay)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
