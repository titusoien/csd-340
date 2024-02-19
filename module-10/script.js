document.addEventListener('DOMContentLoaded', function () {
    // Set up hover event for the first image
    var image1 = document.getElementById('image1');
    image1.addEventListener('mouseover', function() {
        this.style.backgroundImage = "url('image1-hover.jpg')";
    });
    image1.addEventListener('mouseout', function() {
        this.style.backgroundImage = "url('image1.jpg')";
    });

    // Set up hover event for the second image
    var image2 = document.getElementById('image2');
    image2.addEventListener('mouseover', function() {
        this.style.backgroundImage = "url('image2-hover.jpg')";
    });
    image2.addEventListener('mouseout', function() {
        this.style.backgroundImage = "url('image2.jpg')";
    });
});

