document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-html-path]');
    elements.forEach(element => {
        if (element) {
            const htmlPath = element.getAttribute('data-html-path');

            fetch(htmlPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(html => {
                    element.innerHTML = html;
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
    });
});