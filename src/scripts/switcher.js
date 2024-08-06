document.addEventListener("DOMContentLoaded", () => {
    const switcherToggle = document.querySelector('[aria-controls="style-switcher"]');
    const switcherCss = document.querySelectorAll('.style-switcher__css');

    const setActiveTheme = (theme) => {
        const html = document.documentElement;

        // Remove any existing theme classes
        switcherCss.forEach(themeInput => {
            html.classList.remove(themeInput.getAttribute("value"));
            themeInput.disabled = false;
            themeInput.nextElementSibling.classList.remove('active');
        });

        // Add the new class
        html.classList.add(theme);

        // Disable the active theme option and mark it as active
        const activeInput = document.querySelector(`.style-switcher__css[value="${theme}"]`);
        if (activeInput) {
            activeInput.disabled = true;
            activeInput.nextElementSibling.classList.add('active');
        } else {
            console.error(`No element found for theme: ${theme}`);
        }

        // Save the selected theme to localStorage
        localStorage.setItem('theme', theme);
    };

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setActiveTheme(savedTheme);
    }

    // Toggle the switch
    switcherToggle.addEventListener("click", (e) => {
        const switcher = e.target;
        const switcherDropdown = document.getElementById(switcher.getAttribute("aria-controls"));
        const isToggled = switcher.getAttribute("aria-expanded") === "true";

        if (isToggled) {
            switcher.setAttribute("aria-expanded", "false");
            switcherDropdown.setAttribute("hidden", "hidden");
        } else {
            switcher.setAttribute("aria-expanded", "true");
            switcherDropdown.removeAttribute("hidden");
        }
    });

    // Set up change for each input option
    switcherCss.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            const theme = e.target.getAttribute("value");
            setActiveTheme(theme);
        });
    });

    // Close the toggle if clicked outside
    document.addEventListener('click', event => {
        const switcherToggle = document.querySelector('[aria-controls="style-switcher"]');
        const switcherDropdown = document.querySelector('#style-switcher');

        if (switcherToggle.getAttribute("aria-expanded") === "true") {
            if (!event.target.classList.contains("style-switcher__css") && event.target.getAttribute("id") !== "style-switcher-toggle") {
                switcherToggle.setAttribute("aria-expanded", "false");
                switcherDropdown.setAttribute("hidden", "hidden");
            }
        }
    });
});
