async function fetchChainCount() {
    
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const docsRssFeedUrl = 'https://docs.icon.community/api/rss';
    const url = proxyUrl + encodeURIComponent(docsRssFeedUrl);

    try {
        const response = await fetch(url);
        const data = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const items = xmlDoc.getElementsByTagName("item");
        
        let chaincount = 0;

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            
            let guid = item.getElementsByTagName("guid")[0].textContent;
            let description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
            
            // Check if guid includes "work" for additional development section
            if (guid && guid.includes("work")) {

                continue;
            }

            if (description.toLowerCase().includes("development")) {
                chaincount++;
            } else if (description.toLowerCase().includes("testnet")) {
                chaincount++;
            } else if (description.toLowerCase().includes("audits")) {
                chaincount++;
            } else if (description.toLowerCase().includes("mainnet")) {
                chaincount++;
            }

            document.getElementById('chain-count').textContent = `${chaincount}`;
        }

    } catch (error) {
        console.error('Error fetching chaincount', error);
    }
}

fetchChainCount();

