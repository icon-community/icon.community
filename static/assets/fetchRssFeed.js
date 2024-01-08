async function fetchRssFeed() {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const rssFeedUrl = 'https://www.icon.foundation/blog/rss.xml';
    const url = proxyUrl + encodeURIComponent(rssFeedUrl);

    try {
        const response = await fetch(url);
        const data = await response.text();
        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        
        // Process the XML data here
        const items = xmlDoc.getElementsByTagName("item");
        const latestThreeItems = Array.from(items).slice(0,1);

        const newsContainer = document.getElementById('latest-news');
        latestThreeItems.forEach(item => {
            let title = item.getElementsByTagName("title")[0].textContent;
            let link = item.getElementsByTagName("link")[0].textContent;
            let imageUrl = item.getElementsByTagName("enclosure")[0].getAttribute("url");
            
            // Create HTML elements for each news item
            let newsItem = document.createElement('div');
            newsItem.innerHTML = `
                <div class="w-fit mx-auto">
                    <a target="_blank" class='flex items-center text-white py-1' href="${link}">
                        <img src="${imageUrl}" alt="News Image" class="w-4 h-4 mr-2 blur-sm object-cover animate-pulse rounded-full overflow-hidden">
                        <h3 class="font-medium font-montserrat">${title} ↗</h3>
                    </a>
                </div>`;
            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
    }
}

fetchRssFeed();


