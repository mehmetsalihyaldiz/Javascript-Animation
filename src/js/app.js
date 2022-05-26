// gsap.to('.text', { y: 100, opacity: 0, duration: 1 })

// gsap.fromTo('.text', { opacity: 0, y: 20 }, { y: 0, opacity: 1, duration: 1 })

const tl = gsap.timeline({ defaults: { duration: 0.50 } })

tl.fromTo('.cookie-container', { scale: 0 }, { scale: 1 })
tl.fromTo('.cookie', { opacity: 0, x: -50, rotation: '-45reg' }, { opacity: 1, x: 0, rotation: '0reg' })
tl.fromTo('.text', { x: 10, opacity: 0 }, { x: 0, opacity: 1 }, '<')

tl.fromTo('.cookie', { y: 0, rotation: '0deg' }, { y: -10, rotation: '-10deg', yoyo: true, repeat: -1 })

const button = document.querySelector('button')
button.addEventListener('click', () => {
    gsap.to('.cookie-container', { opacity: 0, y: -30 })
})