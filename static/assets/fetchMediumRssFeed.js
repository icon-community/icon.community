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


// 1
        // Extract information
        let title = items[0].getElementsByTagName("title")[0].textContent;
        let link = items[0].getElementsByTagName("link")[0].textContent;
        let author = items[0].getElementsByTagName("dc:creator")[0].textContent;
        let pubDate = items[0].getElementsByTagName("pubDate")[0].textContent;
        let contentEncoded = items[0].getElementsByTagName("content:encoded")[0].textContent;

        // Extract the image URL from content:encoded
        let imageUrl = extractImageUrl(contentEncoded);
        // Format the publication date
        let formattedDate = formatDate(pubDate)

        // Hide loader
        document.getElementById('medium-loader').style.display = 'none';
        
        // Update the HTML elements
        document.getElementById('medium-title').textContent = title;
        document.getElementById('medium-author').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            By ${author}
        `;
        document.getElementById('medium-date').textContent = formattedDate;
        document.getElementById('medium-cta').onclick = () => window.open(link, '_blank');
        document.getElementById('medium-cta').classList.remove('opacity-0');

// 2
        // Extract information from second blog
        let title2 = items[1].getElementsByTagName("title")[0].textContent;
        let link2 = items[1].getElementsByTagName("link")[0].textContent;
        let author2 = items[1].getElementsByTagName("dc:creator")[0].textContent;
        let pubDate2 = items[1].getElementsByTagName("pubDate")[0].textContent;
        let contentEncoded2 = items[1].getElementsByTagName("content:encoded")[0].textContent;

        // Extract the image URL from content:encoded
        let imageUrl2 = extractImageUrl(contentEncoded2);
        // Format the publication date
        let formattedDate2 = formatDate(pubDate2)
        
        // Update the second blog
        document.getElementById('medium-title2').textContent = title2;
        document.getElementById('medium-author2').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            By ${author2}
        `;
        document.getElementById('medium-date2').textContent = formattedDate2;
        document.getElementById('medium-cta2').onclick = () => window.open(link2, '_blank');
        document.getElementById('medium-cta2').classList.remove('opacity-0');
        
// 3
        // Extract information from third blog
        let title3 = items[2].getElementsByTagName("title")[0].textContent;
        let link3 = items[2].getElementsByTagName("link")[0].textContent;
        let author3 = items[2].getElementsByTagName("dc:creator")[0].textContent;
        let pubDate3 = items[2].getElementsByTagName("pubDate")[0].textContent;
        let contentEncoded3 = items[2].getElementsByTagName("content:encoded")[0].textContent;

        // Extract the image URL from content:encoded
        let imageUrl3 = extractImageUrl(contentEncoded3);
        // Format the publication date
        let formattedDate3 = formatDate(pubDate3);

        // Update the third blog
        document.getElementById('medium-title3').textContent = title3;
        document.getElementById('medium-author3').innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            By ${author3}
        `;
        document.getElementById('medium-date3').textContent = formattedDate3;
        document.getElementById('medium-cta3').onclick = () => window.open(link3, '_blank');
        document.getElementById('medium-image3').src = imageUrl3 ? imageUrl3 : ''; // Fallback to empty string if no image
        document.getElementById('medium-cta3').classList.remove('opacity-0');

// 4
        // Extract information from fourth blog
        // let title4 = items[3].getElementsByTagName("title")[0].textContent;
        // let link4 = items[3].getElementsByTagName("link")[0].textContent;
        // let author4 = items[3].getElementsByTagName("dc:creator")[0].textContent;
        // let pubDate4 = items[3].getElementsByTagName("pubDate")[0].textContent;
        // let contentEncoded4 = items[3].getElementsByTagName("content:encoded")[0].textContent;
        
        // Extract the image URL from content:encoded
        // let imageUrl4 = extractImageUrl(contentEncoded4);
        // Format the publication date
        // let formattedDate4 = formatDate(pubDate4);
        
        // Update the fourth blog
        // document.getElementById('medium-title4').textContent = title4;
        // document.getElementById('medium-author4').textContent = 'By ' + author4;
        // document.getElementById('medium-date4').textContent = formattedDate4;
        // document.getElementById('medium-cta4').onclick = () => window.open(link4, '_blank');
        // document.getElementById('medium-image4').src = imageUrl4 ? imageUrl4 : ''; // Fallback to empty string if no image
        // document.getElementById('medium-cta4').classList.remove('opacity-0');

        if (imageUrl) {
            document.getElementById('medium-image').src = imageUrl;
        }
        if (imageUrl2) {
            document.getElementById('medium-image2').src = imageUrl2;
        }
        if (imageUrl3) {
            document.getElementById('medium-image3').src = imageUrl3;
        }
        // if (imageUrl4) {
        //     document.getElementById('medium-image4').src = imageUrl4;
        // }
    } catch (error) {
        console.error('Error fetching Medium RSS feed:', error);
    }
}

fetchMediumRssFeed();
