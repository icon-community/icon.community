function formatDate(dateString) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateString);
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

async function fetchDocsRssFeed() {
    displayLoadingPlaceholders(); // Initially display loading indicators
    
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const docsRssFeedUrl = 'https://docs.icon.community/api/rss';
    const url = proxyUrl + encodeURIComponent(docsRssFeedUrl);

    try {
        const response = await fetch(url);
        const data = await response.text();
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

        // Additionally, track if any items matching 'work' were added
        let workItemsAdded = false;
        
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            
            let title = item.getElementsByTagName("title")[0].childNodes[0].nodeValue;
            let link = item.getElementsByTagName("link")[0].textContent;
            let guid = item.getElementsByTagName("guid")[0].textContent;
            let description = item.getElementsByTagName("description")[0].childNodes[0].nodeValue;
            let imageUrl = item.getElementsByTagName("enclosure")[0].getAttribute("url");
            
            // Check if guid includes "work" for additional development section
            if (guid && guid.includes("work")) {
                appendItemToAdditionalDevelopment(title, link, description);
                workItemsAdded = true;
                continue;
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
        // After processing all items, update UI accordingly
        updateUIAfterProcessing(contentAdded, workItemsAdded);

    } catch (error) {
        console.error('Error fetching ICON Documentation RSS feed:', error);
    }
}

function appendItemToAdditionalDevelopment(title, link, description, imageUrl) {
    const rssFeedContainer = document.getElementById("rss-feed-container-additional-development");
    if (rssFeedContainer) {
        // Create and append the item element for "work" related items
        const itemElement = document.createElement('div');
        itemElement.className = 'rss-item';
        itemElement.innerHTML = `
            <div style="margin: 20px;">
                <div class="rss-item-image" style="display: flex; align-items: center;">
                    <h3 style="margin: 0; font-weight: bold; font-size: 1.1rem"><a href="${link}" target="_blank">${title}</a></h3>
                </div>
                <p style="padding: 16px; border-radius: 4px; background-color: rgba(255, 255, 255, 0.4); box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);">${description}</p>
            </div>    
        `;
        rssFeedContainer.appendChild(itemElement);
    }
}

function updateUIAfterProcessing(contentAdded, workItemsAdded) {
    Object.keys(contentAdded).forEach(category => {
        if (!contentAdded[category]) {
            const categoryElement = document.getElementById(category)?.querySelector('.items-container');
            categoryElement.innerHTML = ''; // Update if no items were added
        }
    });

    // Update UI for additional development section if no "work" items were added
    if (!workItemsAdded) {
        const rssFeedContainer = document.getElementById("rss-feed-container-additional-development");
        rssFeedContainer.innerHTML = '<p>No relevant updates found.</p>';
    }
}

function handleErrorInUI() {
    // Handle error in UI for both existing categories and additional development
    const categories = ['development', 'testnet', 'audits', 'mainnet'];
    categories.forEach(category => {
        const categoryElement = document.getElementById(category)?.querySelector('.items-container');
        categoryElement.innerHTML = '<p>Error loading updates.</p>'; // Update UI in case of error
    });

    // Handle error specifically for the additional development section
    const rssFeedContainer = document.getElementById("rss-feed-container-additional-development");
    if (rssFeedContainer) {
        rssFeedContainer.innerHTML = '<p>Error loading development updates.</p>';
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

