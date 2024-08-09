const currentDate = new Date(document.lastModified);
const year = currentDate.getFullYear();
const footerYear = `© ${year}`;

document.querySelector("#footerYear").textContent = footerYear