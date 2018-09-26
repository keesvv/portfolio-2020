var thumbs = document.querySelectorAll("img.thumb");
thumbs.forEach(i => {
    i.onclick = function () {
        window.open(i.src, "_blank");
    };
});