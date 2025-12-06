// BURGER MENU
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    });
});

// SKILL BAR ANIMATION
const skills = document.querySelectorAll('.skill');
window.addEventListener('load', () => {
    skills.forEach(skill => {
        const bar = skill.querySelector('span');
        const value = skill.dataset.skill;
        bar.style.width = value;
    });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 100){
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });
});

// PARTICLES.JS
particlesJS('particles-js', {
    particles: {
        number: {value: 60},
        color: {value: '#ffffff'},
        shape: {type: 'circle'},
        opacity: {value: 0.5},
        size: {value: 3},
        line_linked: {enable: true, distance: 150, color: '#fff', opacity:0.4, width:1},
        move: {enable: true, speed:2, direction: 'none', random:false, straight:false, out_mode:'out'}
    },
    interactivity: {
        detect_on: 'canvas',
        events: {onhover: {enable:true, mode:'repulse'}, onclick:{enable:true, mode:'push'}}
    },
    retina_detect: true
});

// LIGHT/DARK MODE TOGGLE
const themeToggle = document.querySelector('.toggle-theme');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.innerHTML = document.body.classList.contains('dark') ? '<i class="fa fa-sun"></i>' : '<i class="fa fa-moon"></i>';
});
