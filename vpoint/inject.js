fetch('/vpoint/datalib.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const topnav = doc.querySelector('.tn');
        const copyright = doc.querySelector('.cr');

        if (!topnav || !copyright) return;

        const logo = topnav.querySelector('.logo');

        if (!window.location.href.includes("divisions")) {
            const divisions = topnav.querySelector('.topnav-divisions');
            if (divisions) divisions.remove();
        }

        const liveTopNav = document.querySelector('.topnav');
        const liveCopyright = document.querySelector('.copyright');

        if (liveTopNav.dataset.darkmode) {
            logo.src = "/vpoint/images/vectorpoint_white.png";
        }
        if (liveTopNav) liveTopNav.innerHTML = topnav.innerHTML;
        if (liveCopyright) liveCopyright.innerHTML = copyright.innerHTML;

        const navLinks = document.querySelectorAll('.topnav nav a');
        const currentPath = window.location.pathname;

        navLinks.forEach(link => {
            link.classList.remove("active");

            try {
                const linkPath = new URL(link.href, window.location.origin).pathname;
                if (linkPath === currentPath) {
                    link.classList.add("active");
                }
            } catch (e) {

                if (link.getAttribute('href') === currentPath) {
                    link.classList.add("active");
                }
            }
        });
    })
    .catch(error => console.error('Error loading navigation:', error));
