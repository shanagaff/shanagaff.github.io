const path = window.location.pathname

if (path === "/" || path == "/index.html") {
    // Header 
    fetch('header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header-placeholder').innerHTML = html;
    })
    .catch(error => console.error('Error loading HTML:', error));

    // Footer
    fetch('footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer-placeholder').innerHTML = html;
    })
    .catch(error => console.error('Error loading HTML:', error));
} else {
    // Header
    fetch('../header.html')
    .then(response => response.text())
    .then(html => {
        const container = document.getElementById('header-placeholder');
        container.innerHTML = html;

        // Prefix all links inside the loaded HTML
        const links = container.querySelectorAll('a[href]');
        links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('../')) {
            link.setAttribute('href', '../' + href);
        }

        });

        const imgs = container.querySelectorAll("img[src]");
        imgs.forEach(img => {
        const src = img.getAttribute("src");
        if (!src.startsWith("http") && !src.startsWith("#") && !src.startsWith("../")) {
            img.setAttribute("src", "../" + src);
        }
        });
    });


    // Footer
    fetch('../footer.html')
    .then(response => response.text())
    .then(html => {
        const container = document.getElementById('footer-placeholder');
        container.innerHTML = html;

        // Prefix all links inside the loaded HTML
        const links = container.querySelectorAll('a[href]');
        links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('../')) {
            link.setAttribute('href', '../' + href);
        }

        });

        const imgs = container.querySelectorAll("img[src]");
        imgs.forEach(img => {
        const src = img.getAttribute("src");
        if (!src.startsWith("http") && !src.startsWith("#") && !src.startsWith("../")) {
            img.setAttribute("src", "../" + src);
        }
        });
    });
}