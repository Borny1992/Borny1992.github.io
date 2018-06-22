
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(index) {
    showDivs(slideIndex += index);
}

function currentDiv(index) {
    showDivs(slideIndex = index);
}

function showDivs(index) {
    var i;
    var slides = document.getElementsByClassName("slide");

    if (index > slides.length) slideIndex = 1;
    else if (index < 1) slideIndex = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
}