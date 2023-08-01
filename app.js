const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('animate')
        }
    });
});

const elements = document.querySelectorAll('#Project .container .row');
elements.forEach((el) => observer.observe(el))

const sections = document.querySelectorAll('.navbar-nav a');
// Add listener to every navbar anchor element
sections.forEach((section) => { 
    section.addEventListener("click", function(){
        smoothScroll(document.getElementById(this.id.substring(1)))
    })
})
    
function smoothScroll(target) {
    console.log(target)
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}