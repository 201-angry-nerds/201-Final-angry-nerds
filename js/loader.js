let tl = gsap.timeline({
    onComplete: contentShow,
});
tl.to("#loader", {
    x: "100%",
    duration: 5,
    ease: "power2.in",
});

function contentShow() {
    gsap.set("#container", {display: "block"});
    gsap.set(".txt", {display: "none"});
    gsap.set("#loader", {display: "none"});
    gsap.fromTo("#c-inner", {
        delay: 2,
        opacity: 0,
    }, {
        opacity: 1,
    });
}