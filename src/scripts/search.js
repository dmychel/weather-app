import { search } from "./weatherAPI";

export function locationInput() {
    const form = document.getElementById('locationForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let userInput = document.getElementById('locationInput').value;
        search(userInput);
    })
}

locationInput()