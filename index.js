const myLeads = ["https://www.google.com"];
const inputEl = document.querySelector("#input-el");
const leadsList = document.querySelector("#leads");

const saveLead = () => {
    const inputValue = inputEl.value;
    myLeads.push(inputValue);
    inputEl.value = "";
    displayLead(inputValue);
};

const createListLink = (site) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = site;
    a.target = "_blank";
    a.textContent = site;
    li.appendChild(a);
    return li;
};

const displayLead = (lead) => {
    const li = createListLink(lead);
    leadsList.appendChild(li);
};

const renderLeads = () => {
    for (let lead of myLeads) {
        displayLead(lead);
    }
};

const inputBtn = document.querySelector("#input-btn");

inputBtn.addEventListener("click", saveLead);
renderLeads();
