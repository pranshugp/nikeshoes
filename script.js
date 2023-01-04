var tl = gsap.timeline()


tl.from("#loader img", {
    scale: 1,
    opacity: 0,
    duration: 1,
    delay: 1
})


tl.to("#loader", {
    top: "-100%",
    duration: 1,
    delay: 1
})
tl.from("#right", {
    y: "-100%",
    duration: 1

})


tl.from("#nav", {
    top: "-10%",
    opacity: 0,
    duration: 1,
    delay: 0.1


})
tl.from("#left h2", {
    x: -500,
    duration: 1,
})
tl.from("#left h1", {
    x: -700,
    duration: 1,
})
tl.from("#left #icon", {
    x: -700,
    duration: 1,
})
tl.from("#left p", {
    x: -750,
    duration: 1,
})
tl.from("#left button", {
    x: -750,
    duration: 1,
})
tl.from("#main>h1", {
    x: 1600,
    duration: 1,


})
gsap.from("#main>img", {
    opacity: 0,
    rotate: 40,
    duration: 1,
    delay: 10

})