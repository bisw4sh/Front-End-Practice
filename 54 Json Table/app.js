const table = document.querySelector('table')

async function fetchData(){
  const data = await fetch('./data.json')
  const jsonD = await data.json()

  jsonD.forEach( single => {
  const newEl = document.createElement('tr')
    const txt = `<tr>
                  <td>${single.id}</td>
                  <td>${single.name}</td>
                  <td>${single.date_of_birth}</td>
                  <td>${single.location}</td>
                </tr>`
    newEl.innerHTML += txt
    table.appendChild(newEl)
  })
}

fetchData()