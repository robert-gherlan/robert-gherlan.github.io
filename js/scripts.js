(function () {
    "use strict";

    var STORAGE_KEY = "rg-resume-theme";
    var root = document.documentElement;
    var themeBtn = document.getElementById("theme-toggle");

    function applyTheme(theme) {
        root.setAttribute("data-theme", theme);
        if (themeBtn) {
            var isDark = theme === "dark";
            themeBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
            themeBtn.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
            var label = themeBtn.querySelector(".control-label");
            if (label) {
                label.textContent = isDark ? "Light" : "Dark";
            }
        }
    }

    applyTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
            applyTheme(next);
            try {
                localStorage.setItem(STORAGE_KEY, next);
            } catch (e) {}
        });
    }

    var printBtn = document.getElementById("print-resume");
    if (printBtn) {
        printBtn.addEventListener("click", function () {
            window.print();
        });
    }

    // Active section indicator using IntersectionObserver
    var navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav-link"));
    var sections = navLinks
        .map(function (link) {
            var href = link.getAttribute("href");
            return href && href.charAt(0) === "#" ? document.querySelector(href) : null;
        })
        .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
        var setActive = function (id) {
            navLinks.forEach(function (link) {
                if (link.getAttribute("href") === "#" + id) {
                    link.setAttribute("aria-current", "true");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        };

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                var href = link.getAttribute("href");
                if (href && href.charAt(0) === "#") {
                    setActive(href.slice(1));
                }
            });
        });

        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: "-18% 0px -58% 0px", threshold: 0 }
        );

        sections.forEach(function (sec) {
            observer.observe(sec);
        });

        window.addEventListener(
            "scroll",
            function () {
                if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 32) {
                    setActive(sections[sections.length - 1].id);
                }
            },
            { passive: true }
        );
    }
})();
