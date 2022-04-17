const myLeads = [];
const inputEl = document.querySelector("#input-el");

const saveLead = (event) => {
    const inputValue = inputEl.value;
    myLeads.push(inputValue);
    inputEl.value = "";
};

const inputBtn = document.querySelector("#input-btn");

inputBtn.addEventListener("click", saveLead);
