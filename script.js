let slides = document.querySelectorAll(".slide"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next");

    prev.addEventListener("click", () => slider(prev))
    next.addEventListener("click", () => slider(next))


    let active = 0
function slider(btn) {
    slides.forEach(slide => slide.classList.remove("active"))

    if(btn == next) {
        active++
        if (active == slides.length) {
            active = 0
        }
    }else if(btn == prev) {
        active--
        if (active < 0) {
            active = slides.length - 1
        }
    }
    slides[active].classList.add("active")
}

let autoplay = true,
    speed = 3000;

function autoplaying() {
    if(autoplay == true) {
        slides.forEach(slide => slide.classList.remove("active"));
        active++
        setTimeout(() => autoplaying(), speed)
        if(active == slides.length) {
            active = 0
        }
        slides[active].classList.add("active")
    }
}
autoplaying();