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

// cafe card Slider++++++++++++

let breakfastBtn = document.getElementById('breakfast-btn')
let mainBtn = document.getElementById('main-btn')
let drinkBtn = document.getElementById('drink-btn')

let breakfastCard = document.getElementById('breakfast-card')
let mainCard = document.getElementById('main-card')
let drinksCard = document.getElementById('drinks-card')

let cardBtnPairs = [
    {
        button: breakfastBtn,
        slide: breakfastCard
    },

    {
        button:mainBtn,
        slide:mainCard
    },

    {
        button: drinkBtn,
        slide: drinksCard
    }
]

function setActiveClass(id) {
    if (id == 'breakfast-btn') {
        mainCard.classList.remove('active');
        drinksCard.classList.remove('active');
        breakfastCard.classList.add('active');

        //active cls for btn to underline effect+++

        mainBtn.classList.remove('active-main')
        drinkBtn.classList.remove('active-drink')
        breakfastBtn.classList.add('active-brkfst')
        mainBtn.classList.remove('color')
        drinkBtn.classList.remove('color')
        breakfastBtn.classList.add('color')
       
    }

    if (id == 'main-btn') {
        drinksCard.classList.remove('active');
        breakfastCard.classList.remove('active');
        mainCard.classList.add('active');

        //active cls for btn to underline effect+++

        drinkBtn.classList.remove('active-drink')
        breakfastBtn.classList.remove('active-brkfst')
        mainBtn.classList.add('active-main')

        drinkBtn.classList.remove('color')
        breakfastBtn.classList.remove('color')
        mainBtn.classList.add('color')
    }

    if (id == 'drink-btn') {
        mainCard.classList.remove('active');
        breakfastCard.classList.remove('active');
        drinksCard.classList.add('active');

        //active cls for btn to underline effect+++

        mainBtn.classList.remove('active-main')
        breakfastBtn.classList.remove('active-brkfst')
        drinkBtn.classList.add('active-drink')

        mainBtn.classList.remove('color')
        breakfastBtn.classList.remove('color')
        drinkBtn.classList.add('color')
    }
}


cardBtnPairs.forEach((elm)=>{
    elm.button.addEventListener('click', ()=>{
       setActiveClass(elm.button.id)
    })
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