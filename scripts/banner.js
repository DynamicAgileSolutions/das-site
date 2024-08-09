const currentDay = new Date().getDay();
const home = document.querySelector("#home-page");
const banner = document.querySelector("#banner");

function displayBanner() {
    if (currentDay === 1 || currentDay === 2 || currentDay === 3) {
        const message = document.createElement("p");
		message.textContent = "Subscribe to exclusive access";

        const closeBanner = document.createElement("button");
        closeBanner.textContent = "✖";
        closeBanner.setAttribute("id", "close-banner");

        banner.appendChild(message);
        banner.appendChild(closeBanner);

        closeBanner.addEventListener("click", function() {
            home.classList.toggle("close")
            closeBanner.classList.toggle("close")
            banner.classList.toggle("close")
        }, false);
    }
}

displayBanner();