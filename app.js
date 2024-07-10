
function encodeText() {
    const inputText = document.getElementById('inputText').value;
    const encodedText = btoa(unescape(encodeURIComponent(inputText)));
    const baseURL = window.location.href.split('?')[0];
    const encodedURL = `${baseURL}?data=${encodedText}`;
    document.getElementById('encodedURL').textContent = encodedURL;
}

function decodeText(encodedText) {
    return decodeURIComponent(escape(atob(encodedText)));
}

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const encodedData = params.get('data');
    if (encodedData) {
        const decodedText = decodeText(encodedData);
        document.getElementById('inputText').value = decodedText;
    }
}
