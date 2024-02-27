function formatDate(dateString) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(dateString);
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function extractImageUrl(htmlContent) {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlContent, "text/html");
    const imgElement = htmlDoc.querySelector("img");
    return imgElement ? imgElement.src : null;
}

async function fetchMediumRssFeed() {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const mediumRssFeedUrl = 'https://medium.com/feed/helloiconworld';
    const url = proxyUrl + encodeURIComponent(mediumRssFeedUrl);

    try {
        // Show the loader        
        const response = await fetch(url);
        const data = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");

        // Process the XML data here
        const items = xmlDoc.getElementsByTagName("item");
        const latestItem = items[0]; // Fetch the latest item

        // Extract information
        let title = latestItem.getElementsByTagName("title")[0].textContent;
        let link = latestItem.getElementsByTagName("link")[0].textContent;
        let author = latestItem.getElementsByTagName("dc:creator")[0].textContent;
        let pubDate = latestItem.getElementsByTagName("pubDate")[0].textContent;
        let contentEncoded = latestItem.getElementsByTagName("content:encoded")[0].textContent;
        
        // Extract the image URL from content:encoded
        let imageUrl = extractImageUrl(contentEncoded);
        console.log(imageUrl)
        // Format the publication date
        let formattedDate = formatDate(pubDate)

        // Hide loader
        document.getElementById('medium-loader').style.display = 'none';
        
        // Update the HTML elements
        document.getElementById('medium-title').textContent = title;
        document.getElementById('medium-author').textContent = 'By ' + author;
        document.getElementById('medium-date').textContent = formattedDate;
        // document.getElementById('medium-cta').setAttribute('href', link);
        document.getElementById('medium-cta').onclick = () => window.open(link, '_blank');
        document.getElementById('medium-cta').classList.remove('opacity-0');
        
        

        if (imageUrl) {
            document.getElementById('medium-image').src = imageUrl;
        }
    } catch (error) {
        console.error('Error fetching Medium RSS feed:', error);
    }
}

fetchMediumRssFeed();
