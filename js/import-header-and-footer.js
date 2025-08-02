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

        const currentPage = document.querySelector("#current-page");
        currentPage.innerHTML = "Home";

        highlightButton("home");

    })
    .catch(error => console.error('Error loading HTML:', error));
} else {
    const parts = path.split('/').filter(Boolean); // removes empty strings
    const folderName = formatPageName(parts.length >= 1 ? parts[parts.length - 1] : null);

    console.log("Folder:", folderName);

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

        if (folderName != null) {
            const currentPage = document.querySelector("#current-page");
            currentPage.innerHTML = folderName;
        }

        highlightButton(document.location.pathname);

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

function formatPageName(text) {
    if (text != null) {
        return text
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '); 
    }
}

function highlightButton(pageName) {
    pageName = pageName.replaceAll("/", "");
    const button = document.getElementById(pageName);
    button.style.backgroundColor = "#1abc9c";
    button.style.color = "white";
}