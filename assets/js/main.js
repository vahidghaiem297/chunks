// scrollTrigger
document.addEventListener('DOMContentLoaded', () => {
    let FirstController = new ScrollMagic.Controller();

    let FirstTimeline = new TimelineMax();
    FirstTimeline
        .from('#rock-right', 2, {
            x: 300,
            y: 300,
            ease: Power3.easeInOut
        })
        .from('#man', 2, {
            x: -600,
            y: 600,
            ease: Power3.easeInOut
        }, '-=2')
        .from('#mountain', 2, {
            x: 600,
            y: 600,
            ease: Power3.easeInOut
        }, '-=2')
        .to('#forest-right', 2, {
            y: 30,
            ease: Power3.easeInOut
        }, '-=2')
        .to('#forest-left', 2, {
            y: 50,
            ease: Power3.easeInOut
        }, '-=2')



    let TopScene = new ScrollMagic.Scene({
        triggerElement: '#section1',
        duration: "100%",
        triggerHook: 0,
        offset: 0
    })
        .setTween(FirstTimeline)
        .setPin('#section1')
        .addTo(FirstController)
});




// type animation
$(function () {
    $(".typed").typed({
        strings: ["Designer.", "Frontend.", "Web Developer.", "Man."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 50,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () { },
        // starting callback function before each string
        preStringTyped: function () { },
        //callback for every typed string
        onStringTyped: function () { },
        // callback for reset
        resetCallback: function () { }
    });
});




// var controller = new ScrollMagic.Controller();
// var path = document.querySelector("#svgPath");
// var pathLength = path.getTotalLength();
// path.style.strokeDasharray = pathLength;
// path.style.strokeDashoffset = pathLength;
// var tween = gsap.to(path, {
//     strokeDashoffset: 0,
//     ease: "none",
// });


// var scene = new ScrollMagic.Scene({
//     triggerElement: "#drawSec",
//     duration: "80%",
//     triggerHook: 0.8
// })
//     .setTween(tween)
//     .addIndicators() // Add indicators (requires plugin)
//     .addTo(controller);



// const flightPath = {
//     curviness: 1.25,
//     autoRotate: true,
//     values: [
//         { x: 100, y: -20 },
//         { x: 300, y: 10 },
//         { x: 500, y: 100 },
//         { x: 750, y: -100 },
//         { x: 350, y: -50 },
//         { x: 600, y: 100 },
//         { x: 800, y: 0 },
//         { x: window.innerWidth, y: -600 }

//     ]

// };


// const flightTween = new TimelineLite();


// flightTween.add(
//     TweenLite.to(".paper-plane", 1, {
//         bezier: flightPath,
//         ease: Power1.easeInOut
//     })
// );


// const flightcontroller = new ScrollMagic.Controller();
// const flightScene = new ScrollMagic.Scene({
//     triggerElement: ".drawSec",
//     duration: 3000,
//     triggerHook: 0,
//     offset: 0

// })
//     .setTween(flightTween)
//     // .addIndicators()
//     .setPin(".drawSec")
//     .addTo(flightcontroller)


// Flight path animation configuration
const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        { x: 100, y: -20 },
        { x: 300, y: 10 },
        { x: 500, y: 100 },
        { x: 750, y: -100 },
        { x: 350, y: -50 },
        { x: 600, y: 100 },
        { x: 800, y: 0 },
        { x: window.innerWidth, y: -600 }
    ]
};

// Flight tween animation
const flightTween = new TimelineLite();
flightTween.add(
    TweenLite.to(".paper-plane", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

// SVG path drawing configuration
const svgPath = document.querySelector('#svgPath');
const svgPathLength = svgPath.getTotalLength();
svgPath.style.strokeDasharray = svgPathLength;
svgPath.style.strokeDashoffset = svgPathLength;

// SVG path drawing tween
const svgTween = new TimelineLite();
svgTween.to(svgPath, 1, { strokeDashoffset: 0, ease: Linear.easeNone });

// ScrollMagic controller
const flightController = new ScrollMagic.Controller();

// Flight animation scene
const flightScene = new ScrollMagic.Scene({
    triggerElement: ".drawSec",
    duration: 3000,
    triggerHook: 0,
    offset: 0
})
    .setTween(flightTween)
    .addIndicators()
    .setPin(".drawSec")
    .addTo(flightController);

// SVG path drawing scene
const svgScene = new ScrollMagic.Scene({
    triggerElement: ".drawSec",
    duration: 1000,
    triggerHook: 0
})
    .setTween(svgTween)
    // .addIndicators()
    .addTo(flightController);





