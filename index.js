const leads = JSON.parse(localStorage.getItem("myLeads")) || [];
const inputEl = document.querySelector("#input-el");
const leadsList = document.querySelector("#leads");

const saveLead = () => {
    const inputValue = inputEl.value;
    leads.push(inputValue);
    localStorage.setItem("myLeads", JSON.stringify(leads));
    displayLead(inputValue);
    inputEl.value = "";
};

const createListLink = (site) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `//${site}`;
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
    for (let lead of leads) {
        displayLead(lead);
    }
};

const inputBtn = document.querySelector("#input-btn");

inputBtn.addEventListener("click", saveLead);
if (leads) {
    renderLeads();
}
