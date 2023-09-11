
// JavaScript para Pop-ups

document.addEventListener("DOMContentLoaded", function () {
    const popupLinks = document.querySelectorAll(".popup-link");
    const popupContainer = document.querySelector(".popup-container");
    const popupTitle = document.querySelector("#popupTitle");
    const popupCloseButton = document.querySelector("#popupCloseButton");
    const videoPlayer = document.querySelector("#videoPlayer");

    popupLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const src = link.parentElement.getAttribute("data-src");
            const title = link.parentElement.getAttribute("data-title");

            if (src && title) {
                popupTitle.textContent = title;
                videoPlayer.innerHTML = `<iframe src="${src}" frameborder="0" allowfullscreen></iframe>`;
                popupContainer.style.display = "block";
            }
        });
    });

    popupCloseButton.addEventListener("click", () => {
        videoPlayer.innerHTML = ""; // Remove o vídeo
        popupContainer.style.display = "none";
    });
});