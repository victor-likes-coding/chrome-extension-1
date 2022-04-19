let myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];
const inputEl = document.querySelector("#input-el");
const leadsList = document.querySelector("#leads");
const deleteBtn = document.querySelector("#delete-btn");

const saveLead = () => {
    const inputValue = inputEl.value;
    if (inputValue) {
        myLeads.push(inputValue);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        displayLead(inputValue);
        inputEl.value = "";
    }
};

const getLeads = () => {
    return JSON.parse(localStorage.getItem("myLeads"));
};

const deleteChildElements = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
};

const deleteLeads = () => {
    localStorage.setItem("myLeads", JSON.stringify([]));
    myLeads = getLeads();
    // get rid of ul children
    deleteChildElements(leadsList);
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

const renderLeads = (leads) => {
    for (let lead of leads) {
        displayLead(lead);
    }
};

const inputBtn = document.querySelector("#input-btn");

inputBtn.addEventListener("click", saveLead);
deleteBtn.addEventListener("dblclick", deleteLeads);

if (myLeads) {
    renderLeads();
}
