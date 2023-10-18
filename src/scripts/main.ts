

// hamburger menu control
const hamburger = document.querySelector('.hamburger');
console.log(hamburger)
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