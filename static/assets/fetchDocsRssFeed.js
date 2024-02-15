function formatDate(dateString) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateString);
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

async function fetchDocsRssFeed() {
    displayLoadingPlaceholders(); // Initially display loading indicators
    
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const docsRssFeedUrl = 'https://icon-documentation-2024-git-main-docs-v2-icon-foundation.vercel.app/api/rss';
    const url = proxyUrl + encodeURIComponent(docsRssFeedUrl);

    try {
        const response = await fetch(url);
        const data = await response.text();
        console.log(data); // Check what the fetched data looks like
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const items = xmlDoc.getElementsByTagName("item");
        
        // Initialize content added flags for each category
        const contentAdded = {
            development: false,
            testnet: false,
            audits: false,
            mainnet: false
        };

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            
            let title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
            let link = item.getElementsByTagName("link")[0].textContent;
            let guid = item.getElementsByTagName("guid")[0].textContent;
            let description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
            let imageUrl = item.getElementsByTagName("enclosure")[0].getAttribute("url");
            // Skip items based on specific criteria, e.g., guid includes "work"
            if (guid.includes("work")) {
                continue; // Skip this item
            }
            
            // Determine the category based on description
            let category = '';
            if (description.toLowerCase().includes("development")) {
                category = 'development';
            } else if (description.toLowerCase().includes("testnet")) {
                category = 'testnet';
            } else if (description.toLowerCase().includes("audits")) {
                category = 'audits';
            } else if (description.toLowerCase().includes("mainnet")) {
                category = 'mainnet';
            }

            if (category) {
                const categoryElement = document.getElementById(category).querySelector('.items-container');
                
                // Clear loader for the first item added
                if (!contentAdded[category]) {
                    categoryElement.innerHTML = ''; // Clear loader
                    contentAdded[category] = true;
                }
                
                // Create and append the item element
                const itemElement = document.createElement('div');
                itemElement.className = 'rss-item';
                itemElement.innerHTML = `
                <div style="margin: 20px;">
                    <div class="rss-item-image" style="display: flex; align-items: center;">
                        <img src="${imageUrl}" alt="${title}" style="width: 20px; height: auto; margin-right: 10px;">
                        <h3 style="margin: 0; font-weight: bold;   font-size: 1.1rem"><a href="${link}" target="_blank">${title}</a></h3>
                    </div>
                </div>    
                `;
                categoryElement.appendChild(itemElement);
            }
        }
        // After processing all items
Object.keys(contentAdded).forEach(category => {
    if (!contentAdded[category]) { // If no items were added to this category
        const categoryElement = document.getElementById(category).querySelector('.items-container');
        if (categoryElement) {
            categoryElement.innerHTML = ''; // Clear loader and indicate no items
        }
    }
});

    } catch (error) {
        console.error('Error fetching ICON Documentation RSS feed:', error);
    }
}

function displayLoadingPlaceholders() {
    const categories = ['development', 'testnet', 'audits', 'mainnet'];
    categories.forEach(category => {
        const categoryElement = document.getElementById(category).querySelector('.items-container');
        if (categoryElement) {
            categoryElement.innerHTML = '<div class="loader"></div>'; // Display a loader for each category
        }
    });
}

fetchDocsRssFeed();

