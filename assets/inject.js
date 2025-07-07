function injectFragment(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(id).outerHTML = html;
        });
}
window.addEventListener('DOMContentLoaded', function() {
    injectFragment('header', 'assets/header.html');
    injectFragment('menu', 'assets/menu.html');
}); 