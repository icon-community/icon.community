async function fetchYoutubeRssFeed() {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const youtubeRssFeedUrl = 'https://www.youtube.com/feeds/videos.xml?playlist_id=PLV_LTOH3l7Is3S6msk2prDjAdDjCr8ytl';
    const url = proxyUrl + encodeURIComponent(youtubeRssFeedUrl);

    try {
        const response = await fetch(url);
        const data = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");

        // Process the XML data here
        const entries = xmlDoc.getElementsByTagName("entry");

// 1
        // Extract information
        let link = entries[0].getElementsByTagName("link")[0].getAttribute("href");
        let thumbnailUrl = entries[0].getElementsByTagName("media:thumbnail")[0].getAttribute("url");

        // Hide loader
        document.getElementById('youtube-loader').style.display = 'none';

        // Update the HTML elements
        document.getElementById('youtube-image').src = thumbnailUrl;
        document.getElementById('youtube-cta').onclick = () => window.open(link, '_blank');   
        document.getElementById('youtube-cta').classList.remove('opacity-0');

// 2
        // Extract information
        let link2 = entries[1].getElementsByTagName("link")[0].getAttribute("href");
        let thumbnailUrl2 = entries[1].getElementsByTagName("media:thumbnail")[0].getAttribute("url");

        // Update the HTML elements
        document.getElementById('youtube-image2').src = thumbnailUrl2;
        document.getElementById('youtube-cta2').onclick = () => window.open(link2, '_blank');   
        document.getElementById('youtube-cta2').classList.remove('opacity-0');

// 3 
        // Extract information
        let link3 = entries[2].getElementsByTagName("link")[0].getAttribute("href");
        let thumbnailUrl3 = entries[2].getElementsByTagName("media:thumbnail")[0].getAttribute("url");
        
        // Update the HTML elements
        document.getElementById('youtube-image3').src = thumbnailUrl3
        document.getElementById('youtube-cta3').onclick = () => window.open(link3, '_blank');
        document.getElementById('youtube-cta3').classList.remove('opacity-0');

    } catch (error) {
        console.error('Error fetching YouTube RSS feed:', error);
    }
}

fetchYoutubeRssFeed();
