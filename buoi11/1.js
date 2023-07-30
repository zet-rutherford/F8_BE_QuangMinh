async function shortenURL(){
    const originalURL;
    const apiURL = https://api.shrtco.de/v2/;
    const header = {
        "Content-Type" : "application/json"
    }
}
const data = {
    longURL = originalURL;
}
try {
    const response = await fetch(apiURL, {
        method : 'POST';
        header : header;
        body : JSON.stringify(data)
    })
    const responseData = await response.json();
    if (response.ok) {
        const shortenURL = responseData.id
    } else {
        console.log('Failed to shorten URL:', responseData.message);
    }
} catch (error) {
    console.log('Error:', error);
}