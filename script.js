gsap.registerPlugin(ScrollTrigger);

/* ------------- Loading Section ------------- */
const loadingTimeLine = gsap.timeline();

loadingTimeLine.from('.title', {
  delay: .2,
  duration: .5,
  opacity: 0,
  y: 10
})
.from('.bracket', {
  duration: .3,
  scale: 0,
  margin: 0
})
.from('#loader', {
  duration: .2,
  scale: 0
});


let id;
let i = 0;
function loader() {
  id = setInterval(frame, 45);
}
function frame() {
  if(i >= 100) {
    clearInterval(id);
    welcomeScreenTimeLine.play();
  } else {
    i++;
    document.querySelector('#loader').innerHTML = i + '%';
  }
}
window.onload = function() {
  setTimeout(() => {
    loader();
  }, 500);
  setTimeout(() => {
    document.querySelector('body').style.overflowY='auto';
  }, 5500);
};

/* ------------- Welcome Screen ------------- */
const welcomeScreenTimeLine = gsap.timeline({
  paused: 'true'
});

welcomeScreenTimeLine.to('.loading-section', {
  y: -10,
  opacity: 0
})
.to('.loading-screen', {
  duration: .8,
  y: -2000,
  ease: 'power2.out'
})
.from('.welcome-screen .welcome-text', {
  duration: .5,
  y: 200,
  opacity: 0,
  stagger: {
    amount: .25
  }
}, '-=0.3');

/* ------------- Main Screen ------------- */
ScrollTrigger.create({
  trigger: '.welcome-screen',
  start: 'top top',
  pin: true,
  pinSpacing: false,
  snap: 1,
});

const mainScreenTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-screen .wrapper',
    start: 'top top',
    end: 'top -100%',
    pined: true,
    scrub: 1,
    pin: '.main-screen'
  }
});

mainScreenTimeLine.from('.main-screen .garland-1', {
  y: -300,
  duration: 5
})
.from('.main-screen .garland-2', {
  y: -300,
  duration: 5
})
.from('.main-screen .clapperboard-1', {
  y: 300,
  duration: 5
})
.from('.main-screen .clapperboard-2', {
  y: 300,
  duration: 5
}, '-=5')
.from('.main-screen .clapperboard-anim-1', {
  y: 100,
  scale: 0,
  duration: 5
})
.from('.main-screen .clapperboard-anim-2', {
  y: 100,
  scale: 0,
  duration: 5
}, '-=5')
.from('.main-screen .cake', {
  y: 600,
  duration: 10
})
.from('.main-screen .main-text', {
  y: 50,
  scale: 0,
  duration: 5
})
.to('.main-screen .main-text', {
  duration: 15
});


/* ------------- Text Section ------------- */
const textSectionTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.text-section .wrapper',
    start: 'top top',
    end: 'top -110%',
    pined: true,
    scrub: 1,
    pin: '.text-section'
  }
});

textSectionTimeLine.from('.text-section .main-text', {
  y: 300,
  scale: 0,
  duration: 5
})
.from('.text-section .text-1', {
  opacity: 0,
  duration: 5
})
.from('.text-section .text-2', {
  opacity: 0,
  duration: 5
})
.from('.text-section .text-3', {
  opacity: 0,
  duration: 5
})
.from('.text-section .text-4', {
  opacity: 0,
  duration: 5
})
.to('.text-section .text-4', {
  duration: 15
});

/* ------------- Slide Section ------------- */
/* ------------- Slide 1 ------------- */
const slide1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-1',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide1.from('.slide-1 .slide-img', { x: -300, scale: 0, rotate: 180, duration: 5 })
  .from('.slide-1 .slide-gif', { x: -300, scale: 0, rotate: 280, duration: 5 }, '-=5')
  .from('.slide-1 .slide-text', { x: -1000, opacity: 0, duration: 3 });

/* ------------- Slide 2 ------------- */
const slide2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-2',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide2.from('.slide-2 .slide-img', { x: -300, scale: 0, rotate: 280, duration: 5 })
  .from('.slide-2 .slide-text', { x: 1000, opacity: 0, duration: 3 })
  .from('.slide-2 .slide-gif-1', { y: -300, duration: 5 })
  .from('.slide-2 .slide-gif-2', { y: 300, duration: 5 }, '-=5');

/* ------------- Slide 3 ------------- */
const slide3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-3',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide3.from('.slide-3 .slide-img', { x: -300, scale: 0, rotate: 280, duration: 5 })
  .from('.slide-3 .slide-text', { x: 1000, opacity: 0, duration: 3 })
  .from('.slide-3 .slide-gif-2', { y: -500, duration: 5 })
  .from('.slide-3 .slide-gif-1', { y: 500, duration: 5 }, '-=5');

/* ------------- Slide 4 ------------- */
const slide4 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-4',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide4.from('.slide-4 .slide-img', { x: -300, scale: 0, duration: 5 })
  .from('.slide-4 .slide-text', { x: -1000, opacity: 0, duration: 3 })
  .from('.slide-4 .slide-gif', { y: 500, duration: 5 });

/* ------------- Slide 5 ------------- */
const slide5 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-5',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide5.from('.slide-5 .slide-img', { x: -300, scale: 0, rotate: 180, duration: 5 })
  .from('.slide-5 .slide-gif', { x: -300, scale: 0, rotate: 280, duration: 5 })
  .from('.slide-5 .slide-text', { x: 1000, opacity: 0, duration: 3 });

/* ------------- Slide 6 ------------- */
const slide6 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-6',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide6.from('.slide-6 .slide-img', { x: -300, scale: 0, rotate: 180, duration: 5 })
  .from('.slide-6 .slide-gif', { x: -300, scale: 0, rotate: 280, duration: 5 })
  .from('.slide-6 .slide-text', { x: -1000, opacity: 0, duration: 3 });

/* ------------- Slide 6-1 ------------- */
const slide6_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-6-1',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide6_1.from('.slide-6-1 .slide-img', { y: 800, duration: 5 })
  .from('.slide-6-1 .slide-gif', { x: 300, opacity: 0, duration: 5 }, '+=1');

/* ------------- Slide 7 ------------- */
const slide7 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-7',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide7.from('.slide-7 .slide-img', { x: -300, scale: 0, rotate: 280, duration: 5 })
  .from('.slide-7 .slide-text', { x: -1000, opacity: 0, duration: 3 })
  .from('.slide-7 .slide-gif-2', { y: -500, duration: 5 })
  .from('.slide-7 .slide-gif-1', { y: 500, duration: 5 }, '-=5');

/* ------------- Slide 8 ------------- */
const slide8 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-8',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide8.from('.slide-8 .slide-img', { x: -800, duration: 5 })
  .from('.slide-8 .slide-text', { x: -1000, opacity: 0, duration: 3 })
  .from('.slide-8 .slide-gif-2', { y: -500, scale: 0, rotate: 280, duration: 5 })
  .from('.slide-8 .slide-gif-1', { y: 500, scale: 0, rotate: 280, duration: 5 }, '-=5');

/* ------------- Slide 9 ------------- */
const slide9 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-9',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide9.from('.slide-9 .slide-img', { x: 800, opacity: 0, duration: 5 })
  .from('.slide-9 .slide-text', { x: -1000, opacity: 0, duration: 3 })
  .from('.slide-9 .slide-gif-2', { y: -500, duration: 5 })
  .from('.slide-9 .slide-gif-1', { y: 500, duration: 5 }, '-=5');

/* ------------- Slide 9-1 ------------- */
const slide9_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-9-1',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide9_1.from('.slide-9-1 .slide-img', { y: 800, duration: 5 })
  .from('.slide-9-1 .slide-gif', { x: 300, opacity: 0, duration: 5 }, '+=1');

/* ------------- Slide 10 ------------- */
const slide10 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-10',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide10.from('.slide-10 .slide-img', { x: 500, scale: 0, rotate: -280, duration: 5 })
  .from('.slide-10 .slide-text', { x: 1000, opacity: 0, duration: 3 })
  .from('.slide-10 .slide-gif-2', { y: -500, duration: 5 })
  .from('.slide-10 .slide-gif-1', { y: 500, duration: 5 }, '-=5');

/* ------------- Slide 11 ------------- */
const slide11 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-11',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide11.from('.slide-11 .slide-img', { x: 800, opacity: 0, duration: 5 })
  .from('.slide-11 .slide-text', { x: -1000, opacity: 0, duration: 3 })
  .from('.slide-11 .slide-gif-2', { y: -500, duration: 5 })
  .from('.slide-11 .slide-gif-1', { y: 500, duration: 5 }, '-=5');

/* ------------- Slide 12 ------------- */
const slide12 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-12',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide12.from('.slide-12 .slide-img', { x: 800, scale: 0, rotate: -280, duration: 5 })
  .from('.slide-12 .slide-text', { x: 1000, opacity: 0, duration: 3 })
  .from('.slide-12 .slide-gif-2', { y: -500, duration: 5 })
  .from('.slide-12 .slide-gif-1', { y: 500, duration: 5 }, '-=5');

/* ------------- Slide 13 ------------- */
const slide13 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-13',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide13.from('.slide-13 .slide-img', { x: -1000, duration: 5 })
  .from('.slide-13 .slide-text', { x: -1000, opacity: 0, duration: 3 })
  .from('.slide-13 .slide-gif-2', { y: -500, duration: 5 })
  .from('.slide-13 .slide-gif-1', { y: 500, duration: 5 }, '-=5');

/* ------------- Slide 14 ------------- */
const slide14 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-14',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide14.from('.slide-14 .slide-img', { x: 800, scale: 0, rotate: -280, duration: 5 })
  .from('.slide-14 .slide-text', { x: 1000, opacity: 0, duration: 3 })
  .from('.slide-14 .slide-gif-2', { y: -500, duration: 5 })
  .from('.slide-14 .slide-gif-1', { y: 500, duration: 5 }, '-=5');

/* ------------- Slide 15 ------------- */
const slide15 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-15',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide15.from('.slide-15 .slide-img', { y: -800, duration: 5 })
  .from('.slide-15 .slide-gif', { x: 200, opacity: 0, duration: 5 })
  .from('.slide-15 .slide-text', { y: 500, opacity: 0, duration: 3 });

/* ------------- Slide 16 ------------- */
const slide16 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-16',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide16.from('.slide-16 .slide-img', { y: -800, duration: 5 })
  .from('.slide-16 .slide-gif-1', { x: -200, opacity: 0, duration: 5 })
  .from('.slide-16 .slide-gif-2', { x: 200, opacity: 0, duration: 5 }, '-=5')
  .from('.slide-16 .slide-text', { y: 500, opacity: 0, duration: 3 });

/* ------------- Slide 16-1 ------------- */
const slide16_1 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-16-1',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide16_1.from('.slide-16-1 .vid-3', { y: -1100, duration: 5 })
  .from('.slide-16-1 .vid-2', { y: 800, duration: 5 })
  .from('.slide-16-1 .vid-1', { y: 800, duration: 5 }, '-=5');

/* ------------- Slide 17 ------------- */
const slide17 = gsap.timeline({
  scrollTrigger: {
    trigger: '.slide-17',
    start: 'top 60%',
    end: '30% 40%',
    scrub: 1
  }
});
slide17.from('.slide-17 .slide-img', { x: 800, scale: 0, rotate: -280, duration: 5 })
  .from('.slide-17 .slide-text', { x: 1000, opacity: 0, duration: 3 })
  .from('.slide-17 .slide-gif', { y: 200, opacity: 0, duration: 5 });


/* ------------- Desct Section ------------- */
const descrSectionTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.descr-section .wrapper',
    start: 'top top',
    end: 'top -6100%',
    pined: true,
    scrub: 1,
    pin: '.descr-section'
  }
});

descrSectionTimeLine.to('.descr-section .text', {
  x: -61450,
  ease: "none",
  duration: 4
});

/* ------------- Final Section ------------- */
const finalSectionTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: '.final-section .wrapper',
    start: 'top top',
    end: 'top -200%',
    pined: true,
    scrub: 1,
    pin: '.final-section'
  }
});

finalSectionTimeLine.from('.final-section .img', {
  y: 300,
  opacity: 0,
  duration: 4
})
.from('.final-section .gif-1', {y: -300, duration: 3})
.from('.final-section .gif-2', {y: 200, duration: 3})
.from('.final-section .gif-3', {scale: 0, duration: 3})
.from('.final-section .gif-4', {opacity: 0, duration: 3})
.from('.final-section .gif-5', {x: 500, duration: 3})
.from('.final-section .gif-6', {x: 200, y: 400, duration: 3});