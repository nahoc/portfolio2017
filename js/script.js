var scroll = new SmoothScroll('a[href*="#"]');

function onScroll() {
    if (document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').style.backgroundColor = "white";
        document.getElementById('navbar').style.boxShadow = "0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)";
    } else {
        document.getElementById('navbar').style.backgroundColor = "transparent";
        document.getElementById('navbar').style.boxShadow = "none";
    }
}

window.addEventListener("scroll", onScroll);