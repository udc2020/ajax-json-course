// ajax & json course by UDC
let output = document.querySelector("#output")
let allContent = document.querySelector("#all-content")


const xhr = new XMLHttpRequest()

// 
// document.getElementById("btn-text").
document.getElementById("btn-json").addEventListener("click", () => {

    // output.innerHTML = xhr.responseText
    
    let htmlElement = "<ul></ul>"
    let datas =  JSON.parse(xhr.responseText)
    for (let d of datas) {
        
        htmlElement += `
            <li>
                <span>${d.name}</span>
                <span>${d.age}</span>
                <span>Skilles ${d.skills}</span>
               
       `
    }
    htmlElement += "</ul>"

    allContent.innerHTML = htmlElement




})


xhr.onreadystatechange = () => xhr.readyState == 4 && xhr.status == 200 ? console.log("sucess!") : console.log("fail!")


// xhr.open("GET", "sometext.txt", true)
// xhr.open("GET","json-file.json",true)
// xhr.open("GET","https://raw.githubusercontent.com/udc2020/udc-api-ajax/main/api-udc-ajax.json",true)
xhr.send()

