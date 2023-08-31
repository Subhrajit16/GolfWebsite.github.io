let crsr = document.getElementById('cursor');
let crsrBlur = document.getElementById('cursor-blur');
let navlink = document.querySelectorAll('.navlink ul li')
let button = document.querySelectorAll('.button')
let page4card = document.querySelectorAll('.page4-card')
let p4Heading = document.getElementById('page4-heading')
let navButton = document.querySelector('.nav-button');
// let toggleBtn = document.getElementById('toggle-icon')

document.addEventListener('mousemove', (e) => {
    // console.log(e.x)
    // console.log(e.y)

    crsr.style.display = "block";
    crsr.style.left = e.x + "px";
    crsr.style.top = e.y + "px";
    crsrBlur.style.display = "block";
    crsrBlur.style.left = e.x + "px";
    crsrBlur.style.top = e.y + "px";
})

document.addEventListener('mouseout', () => {
    crsr.style.display = "none";
})

navlink.forEach((li) => {
    li.addEventListener('mouseenter', () => {
        crsr.style.height = "70px";
        crsr.style.width = "70px";
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "2px solid white";
        crsr.style.transition = 'all 0.3s';

    })
    li.addEventListener('mouseleave', () => {
        crsr.style.height = "25px";
        crsr.style.width = "25px";
        crsr.style.backgroundColor = "#95c11e";
        crsr.style.border = "none";
    })
})

// toggleBtn.addEventListener('mouseenter', () => {
//     crsr.style.height = "70px";
//     crsr.style.width = "70px";
//     crsr.style.backgroundColor = "transparent";
//     crsr.style.border = "2px solid white";
//     crsr.style.transition = 'all 1s';
// })
// toggleBtn.addEventListener('mouseout', () => {
//     crsr.style.height = "25px";
//     crsr.style.width = "25px";
//     crsr.style.backgroundColor = "#95c11e";
//     crsr.style.border = "none";
// })
button.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
        crsr.style.height = "70px";
        crsr.style.width = "70px";
        crsr.style.backgroundColor = "transparent";
        crsr.style.border = "2px solid white";
        crsr.style.transition = 'all 0.3s';

    })
    btn.addEventListener('mouseleave', () => {
        crsr.style.height = "25px";
        crsr.style.width = "25px";
        crsr.style.backgroundColor = "#95c11e";
        crsr.style.border = "none";
    })
})

navButton.addEventListener('mouseenter', () => {
    crsr.style.height = "70px";
    crsr.style.width = "70px";
    crsr.style.backgroundColor = "transparent";
    crsr.style.border = "2px solid white";
    crsr.style.transition = 'all 0.3s';

})
navButton.addEventListener('mouseleave', () => {
    crsr.style.height = "25px";
    crsr.style.width = "25px";
    crsr.style.backgroundColor = "#95c11e";
    crsr.style.border = "none";
})

page4card.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        p4Heading.style.cssText += '-webkit-text-stroke: 2px #95c11e;';
    });

    card.addEventListener('mouseleave', () => {
        p4Heading.style.removeProperty('-webkit-text-stroke');
    });
});


//parallax move
document.addEventListener('mousemove', parallax);

function parallax(e) {

    document.querySelectorAll('.parallax').forEach((move) => {
        let speed = move.getAttribute("data-value")
        let x = (e.clientX * speed) / 150
        let y = (e.clientY * speed) / 150

        move.style.transform = `translateX(${x}px) translateY(${y}px)`
    })


}


gsap.to('#nav', {
    backgroundColor: "black",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        scrub: 1
    }
})

gsap.to("#main-div", {
    backgroundColor: 'black',
    duration: 1,
    scrollTrigger: {
        trigger: '#main-div',
        scroller: 'body',
        // markers: true,
        start: 'top -30%',
        end: 'top -70%',
        scrub: 2
    }
})

gsap.from('#about-us #about-left-img', {
    x: -400,
    duration: 3,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about-us #about-left-img',
        scroller: 'body',
        scrub: 2,
        // markers:true,
        start: 'top 70%',
        end: 'top 45%'
    }
})
gsap.from('#about-us #about-right-img', {
    x: 400,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
        trigger: '#about-us #about-right-img',
        scroller: 'body',
        scrub: 2,
        // markers:true,
        start: 'top 70%',
        end: 'top 45%'
    }
})
gsap.from('#about-us-in h2', {
    y: -200,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
        trigger: '#about-us-in h2',
        scroller: 'body',
        scrub: 2,
        // markers:true,
        start: 'top 43%',
        end: 'top 30%'
    }
})
gsap.from('#about-us-in p', {
    y: 200,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
        trigger: '#about-us-in p',
        scroller: 'body',
        scrub: 2,
        // markers:true,
        start: 'top 97%',
        end: 'top 85%'
    }
})
gsap.from('#colon1', {
    y: -50,
    x: -50,
    // opacity:0,
    duration: 1.2,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: 'body',
        scrub: 2,
        // markers:true,
        start: 'top 60%',
        end: 'top 50%'
    }
})
gsap.from('#colon2', {
    y: 30,
    x: 30,
    // opacity:0,
    duration: 1.2,
    scrollTrigger: {
        trigger: '#colon2',
        scroller: 'body',
        scrub: 2,
        // markers:true,
        start: 'top 95%',
        end: 'top 85%'
    }
})
gsap.from('#page4-heading', {
    y: 60,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: '#page4-heading',
        scroller: 'body',
        scrub: 2,
        // markers:true,
        start: 'top 80%',
        end: 'top 65%'
    }
})

let navbar = document.getElementById('nav')
let toggleOpener = document.querySelector(".open");
let toggleCloser = document.querySelector(".close");
toggleOpener.addEventListener('click', () => {
    navbar.classList.add('active');
})
toggleCloser.addEventListener('click', () => {
    navbar.classList.remove('active');
})


