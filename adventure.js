let crsr = document.getElementById('cursor');
let crsrBlur = document.getElementById('cursor-blur');
let navlink = document.querySelectorAll('.navlink ul li')
let button = document.querySelectorAll('.button')
let navButton = document.querySelector('.nav-button');
let navbar = document.getElementById('nav')
let toggleOpener = document.querySelector(".open");
let toggleCloser = document.querySelector(".close");

let page5card = document.querySelectorAll('.page5-card')
let p5Heading = document.getElementById('page5-heading')

page5card.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        p5Heading.style.cssText += '-webkit-text-stroke: 2px #95c11e;';
    });

    card.addEventListener('mouseleave', () => {
        p5Heading.style.removeProperty('-webkit-text-stroke');
    });
});

gsap.from('#page5-heading', {
    y: 60,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: '#page5-heading',
        scroller: 'body',
        scrub: 2,
        // markers:true,
        start: 'top 80%',
        end: 'top 65%'
    }
})

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

let tl = gsap.timeline()

tl.from('#page1 #img1',{
    opacity:0,
    duration:2,
    yoyo:true,
    repeat:-1
})
tl.from('#page1 #img2',{
    opacity:0,
    duration:2,
    yoyo:true,
    repeat:-1
})

let tl2=gsap.timeline()
tl2.from('#page1 #img4',{
    opacity:0,
    duration:3,
    yoyo:true,
    repeat:-1
})
tl2.from('#page1 #img5',{
    opacity:0,
    duration:2,
    yoyo:true,
    repeat:-1,
    delay:1
})

gsap.from('#page1 #img3',{
    opacity:0,
    duration:3,
    yoyo:true,
    repeat:-1,
    // delay:1
})

//2nd page image animation+++++++++

let page2Img1 = document.getElementById('page2-first-img')
let page2Img2 = document.getElementById('page2-senond-img')
let page2Overlay = document.getElementById('page2-overlay-div')
// let passcodeForAgainOverlay = false;
// let passfor1 =true;
let id=setInterval(animateImg, 3000);

let currentVisibleElemnt = page2Img2
function animateImg(){
    if(currentVisibleElemnt == page2Img2){
        page2Overlay.style.opacity=1;
        currentVisibleElemnt=page2Overlay
    }
    else if(currentVisibleElemnt == page2Overlay){
        page2Img1.style.opacity=1;
        // page2Overlay.style.opacity=0;
        currentVisibleElemnt=page2Img1;
    }
    
    else {
        page2Overlay.style.opacity=0;
        page2Img1.style.opacity=0;
        currentVisibleElemnt=page2Img2
    }
    
    
}

// Small card Animation page-4

let cardtl = gsap.timeline();
cardtl.to('.page4card .small-card1',{
    rotation:20,
    // duration:1,
    scrollTrigger:{
        trigger:'.page4card .small-card1',
        scroller:'body',
        // markers:true,
        start:'top 85%',
        end:'top 75%',
        scrub:2
        
    }
})
cardtl.to('.page4card .small-card2',{
    rotation:-20,
    // duration:1,
    scrollTrigger:{
        trigger:'.page4card .small-card2',
        scroller:'body',
        // markers:true,
        start:'top 82%',
        end:'top 75%',
        scrub:2
        
    }
})