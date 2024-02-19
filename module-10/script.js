function hoverImage(imageId, hoverSrc) {
    document.getElementById(imageId).src = hoverSrc;
}

function unhoverImage(imageId, originalSrc) {
    document.getElementById(imageId).src = originalSrc;
}
