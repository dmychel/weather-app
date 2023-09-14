import { search } from "./weatherAPI";

function locationInput(){
    const form = document.getElementById('locationForm')
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        console.log('submit')
    })
}

locationInput()