let controller;
let slideScene;
let pageScene;


function animateSlides() {
    //Init Controller
    controller = new ScrollMagic.Controller();
    //Select some things
    const sliders = document.querySelectorAll('.slide');
    const nav = document.querySelector('.nav-header');

    sliders.forEach(slide => {
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');
        //GSAP
        const SlideTl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });
        SlideTl.fromTo(revealImg, { x: '0%' }, { x: '100%' });
        SlideTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=0.8");
        SlideTl.fromTo(revealText, { x: '0%' }, { x: '100%' }, "-=0.5");
        SlideTl.fromTo(nav, { y: '-100%' }, { y: '0%' }, "-=1.5");
        //create Scene
        slideScene = new ScrollMagic.Scene({
            triggerElement: slide,
            triggerHook: 0.25,
            reverse: false
        }).setTween(SlideTl)
            // .addIndicators({
            //     colorStart: "white",
            //     colorTrigger: 'white',
            //     name: 'slide'
            // })
            .addTo(controller)
        //New animation
        //New ANimation
        const pageTl = gsap.timeline();
        // let nextSlide = slides.length - 1 === index ? "end" : slides[index + 1];
        // pageTl.fromTo(nextSlide, { y: "0%" }, { y: "50%" });
        pageTl.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
        // pageTl.fromTo(nextSlide, { y: "50%" }, { y: "0%" }, "-=0.5");
        //Create new scene
        pageScene = new ScrollMagic.Scene({
            triggerElement: slide,
            duration: "100%",
            triggerHook: 0
        })
            // .addIndicators({
            //   colorStart: "white",
            //   colorTrigger: "white",
            //   name: "page",
            //   indent: 200
            // })
            .setPin(slide, { pushFollowers: false })
            .setTween(pageTl)
            .addTo(controller);
    })
}
animateSlides();

function CursorMove(e) {
    const mouse = document.querySelector('.cursor');
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
}
function activeCursor(){
    
}
window.addEventListener('mousemove', CursorMove);



