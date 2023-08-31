let crsr = document.getElementById('cursor');
let crsrBlur = document.getElementById('cursor-blur');
let navlink = document.querySelectorAll('.navlink ul li')
let button = document.querySelectorAll('.button')
let navButton = document.querySelector('.nav-button');
let navbar = document.getElementById('nav')
let toggleOpener = document.querySelector(".open");
let toggleCloser = document.querySelector(".close");
let page4card = document.querySelectorAll('.page4-card')
let p4Heading = document.getElementById('page4-heading')

page4card.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        p4Heading.style.cssText += '-webkit-text-stroke: 2px #95c11e;';
    });

    card.addEventListener('mouseleave', () => {
        p4Heading.style.removeProperty('-webkit-text-stroke');
    });
});

toggleOpener.addEventListener('click', () => {
    navbar.classList.add('active');
})
toggleCloser.addEventListener('click', () => {
    navbar.classList.remove('active');
})

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


gsap.to('#nav', {
    backgroundColor: "black",
    height: "100px",
    possition: 'fixed',
    top: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -5%",
        scrub: 1
    }
});

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


// Lessons slide JS

const lessonPairs = [
    {
        button: document.getElementById('individualLessonBtn'),
        slide: document.getElementById('individualLessonSlide')
    },


    {
        button: document.getElementById('groopLessonBtn'),
        slide: document.getElementById('groopLessonSlide')
    },


    {
        button: document.getElementById('juniorLessonBtn'),
        slide: document.getElementById('juniorLessonSlide')
    }
];

function setActiveSlide(activeBtn, activeSlide) {
    lessonPairs.forEach((elm) => {
        // console.log(elm)
        elm.slide.classList.remove('active')
        elm.button.classList.remove('active-btn-inidividual')
        elm.button.classList.remove('active-btn-groop')
        elm.button.classList.remove('active-btn-junior')
        elm.button.classList.remove('color')
    })
    activeSlide.classList.add('active')
    if (activeBtn.id == 'individualLessonBtn') {
        activeBtn.classList.add('active-btn-inidividual');
        activeBtn.classList.add('color');

    }
    if (activeBtn.id == 'groopLessonBtn') {
        activeBtn.classList.add('active-btn-groop')
        activeBtn.classList.add('color');
    }
    if (activeBtn.id == 'juniorLessonBtn') {
        activeBtn.classList.add('active-btn-junior')
        activeBtn.classList.add('color');
    }
}

lessonPairs.forEach((pair) => {
    pair.button.addEventListener('click', () => {
        console.log(pair.button)
        console.log(pair.slide)
        setActiveSlide(pair.button, pair.slide);
    })
})



gsap.from('#page3 .page3-dot-img', {
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger: '#page3 .page3-dot-img',
        scroller: 'body',
        // markers: true,
        scrub:2,
        start: 'top 30%',
        end:'top 25%'
    }
})



gsap.from('#page3 .page3-card-inner-left', {
    left: -400,
    opacity:0,
    duration:5,
    scrollTrigger:{
        trigger: '#page3 .page3-card-inner-left',
        scroller: 'body',
        // markers: true,
        scrub:2,
        start: 'top 70%',
        end:'top 30%'
    }

})
gsap.from('#page3 .page3-card-inner-right', {
    left: 400,
    opacity:0,
    duration:5,
    scrollTrigger:{
        trigger: '#page3 .page3-card-inner-right',
        scroller: 'body',
        // markers: true,
        scrub:2,
        start: 'top 70%',
        end:'top 30%'
    }

})