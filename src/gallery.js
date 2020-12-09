
  
// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myScroll()};
function myScroll() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " tcolor";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top tcolor", "");
    }
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

function myFunction(id,num) {
    var x = document.getElementById(id);
    var y = document.querySelectorAll(".acc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        y[num].className = "fa" + " fa-minus" + " acc" + " w3-small";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        y[num].className = "fa" + " fa-plus" + " acc" + " w3-small";
    }
}
