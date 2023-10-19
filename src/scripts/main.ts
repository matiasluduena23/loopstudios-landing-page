

// hamburger menu control
const hamburger = document.querySelector('.hamburger');

hamburger?.addEventListener('click', () => {
    console.log('hola')
    const isExpanded = JSON.parse(hamburger.getAttribute('aria-expanded')!);
    hamburger.setAttribute('aria-expanded', new Boolean(!isExpanded).toString())
})

window.addEventListener('resize', () =>{
    if (window.innerWidth > 800) {
        hamburger?.setAttribute('aria-expanded' ,'false')
    }
})

 const navbar = document.querySelector('.navbar')
 const header = document.querySelector('.header')

 const intersection = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        !entry.isIntersecting ? 
        navbar?.classList.add('scrolled') :
        navbar?.classList.remove('scrolled')
    })
 }, {rootMargin: "-300px 0px 0px 0px"})

if(header){
     intersection.observe(header)
}
