const textbox=document.getElementById("textholder")

async function getWeather() {
    var pressdata = await fetch('https://poetrydb.org/title')
    .then(response => response.json())
    .then(data => {
        console.log(data.titles[3000])
        // for(let i = 0; i < 1000; i++){
        //     let content = document.createElement("p")
        //     content.textContent = data.titles[i]
        //     textbox.append(content)
        // }
        return data
    })
    .catch(err => console.error(err));



    
    return pressdata.titles
}
getWeather()

async function addToList() {
    var pressdata = await getWeather()
    console.log(pressdata)
      for(let i = 0; i < 2000; i++){
            let content = document.createElement("p")
            content.textContent = pressdata[i]
            textbox.append(content)
        }
      }
addToList()