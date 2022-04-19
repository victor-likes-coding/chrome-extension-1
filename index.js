let myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];
const inputEl = document.querySelector("#input-el");
const leadsList = document.querySelector("#leads");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");

const saveTab = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        saveToLocalStorage("myLeads", url);
    });
};

const saveToLocalStorage = (key, value) => {
    myLeads.push(value);
    localStorage.setItem(key, JSON.stringify(myLeads));
    displayLead(value);
};

const saveLead = () => {
    const inputValue = inputEl.value;
    if (inputValue) {
        saveToLocalStorage("myLeads", inputValue);
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

const render = (leads) => {
    if (leads && leads.length > 0) {
        for (let lead of leads) {
            displayLead(lead);
        }
    }
};

const inputBtn = document.querySelector("#input-btn");

inputBtn.addEventListener("click", saveLead);
deleteBtn.addEventListener("dblclick", deleteLeads);
tabBtn.addEventListener("click", saveTab);

if (myLeads) {
    render(myLeads);
}
