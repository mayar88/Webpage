window.onload = function() {
    const video = document.getElementById("background-video");
    const image = document.getElementById("background-image");

    if (window.innerWidth >= 768) {
        video.style.display = "block";
        image.style.display = "none";
    } else {
        video.style.display = "none";
        image.style.display = "block";
    }
};
