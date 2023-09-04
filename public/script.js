const body = document.body;

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

let loadInterval;

// function loader(element) { 
//     element.textContent = '';

//     loadInterval = setTimeout(() => {
//     element.textContent += '.';

//     if (element.textContent === '....'){
//         element.textContent = '';
//     }

// },300)}
const keywordInput = document.getElementById("tarea");

async function fetchAndSaveData(keyword) {
    try {
        console.log('Fetching data...');
        const response = await fetch('/fetch', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ keyword })});
        console.log('Response:', response);
        const message = await response.text();
        console.log('Message:', message);
        alert(message);
    } catch (error) {
        console.error('Error:', error);
        alert('Error fetching data!!!');
    }
}
// Fetch data from a button

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const enteredKeyword = keywordInput.value.trim();
    if (enteredKeyword) {
        fetchAndSaveData(enteredKeyword);
    } else {
        alert("Please enter a keyword");
    }
});
// Search keyword