async function fetchYoutubeRssFeed() {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const youtubeRssFeedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCI7Z_1sTKN-kCVgFD2a0GXQ';
    const url = proxyUrl + encodeURIComponent(youtubeRssFeedUrl);

    try {
        const response = await fetch(url);
        const data = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");

        // Process the XML data here
        const entries = xmlDoc.getElementsByTagName("entry");
        const latestEntry = entries[0]; // Fetch the latest entry

        // Extract information
        let title = latestEntry.getElementsByTagName("title")[0].textContent;
        let link = latestEntry.getElementsByTagName("link")[0].getAttribute("href");
        let pubDate = latestEntry.getElementsByTagName("published")[0].textContent;
        let thumbnailUrl = latestEntry.getElementsByTagName("media:thumbnail")[0].getAttribute("url");

        // Format the publication date
        let formattedDate = formatDate(pubDate);

        // Update the HTML elements
        document.getElementById('youtube-title').textContent = title;
        document.getElementById('youtube-date').textContent = formattedDate;
        document.getElementById('youtube-image').src = thumbnailUrl;
        document.getElementById('youtube-cta').onclick = () => window.open(link, '_blank');
        document.getElementById('youtube-card').classList.remove('opacity-0');


    } catch (error) {
        console.error('Error fetching YouTube RSS feed:', error);
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

fetchYoutubeRssFeed();
