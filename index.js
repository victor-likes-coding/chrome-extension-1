const myLeads = ["www", "http"];
const inputEl = document.querySelector("#input-el");
const leadsList = document.querySelector("#leads");

const saveLead = () => {
    const inputValue = inputEl.value;
    myLeads.push(inputValue);
    inputEl.value = "";
    displayLead(inputValue);
};

const displayLead = (lead) => {
    const li = document.createElement("li");
    li.textContent = lead;
    leadsList.appendChild(li);
};

const renderLeads = () => {
    for (let lead of myLeads) {
        const li = document.createElement("li");
        li.textContent = lead;
        leadsList.appendChild(li);
    }
};

const inputBtn = document.querySelector("#input-btn");

inputBtn.addEventListener("click", saveLead);
renderLeads();
