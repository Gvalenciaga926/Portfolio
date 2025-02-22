/*==== SHOW MENU =====*/
const toggleMenu = (toggleid, navid) => {
    const toggle = document.getElementById(toggleid);
    const nav =  document.getElementById(navid);

    if(toggle && nav){
        toggle.addEventListener('click' , () => {
            nav.classList.toggle('show-menu')
        })
    }
}

toggleMenu('nav-toggle' , 'nav-menu')

/*===== REMOVE MENU MOBILE ====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*========== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })

}

window.addEventListener('scroll' , scrollActive)

/*===== CHANGE BACKGROUND HEADER ======*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*===== SHOW SCROLL UP BTN ======*/
function scrollUp(){
    const scrollUpbtn = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollUpbtn.classList.add('show-scroll'); else scrollUpbtn.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)