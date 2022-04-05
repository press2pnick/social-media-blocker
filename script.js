let domains = ["vk.com", "youtube.com", "pornhub.com", "2ch.hk"]

let buttonBlock = document.getElementById("button-block")
buttonBlock.onclick = async() => {
    let currentTab = await getCurrentTab();
    let url = currentTab.url;
    let domain = new URL(url)
    if (domains.includes(domain.hostname)) {
        chrome.tabs.update({ url: "https://google.com" });
    }
}

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}