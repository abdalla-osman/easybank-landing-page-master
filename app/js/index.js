let btnNav=document.querySelector('.btn-nav');
let nav=document.querySelector('.nav');
let overlay=document.getElementById('overlay');
btnNav.addEventListener('click',()=>{
    nav.classList.toggle('active')
    overlay.classList.toggle('active')
    if(nav.className.includes('active')){
        btnNav.src='/images/icon-close.svg'
    }
    else{
        btnNav.src='/images/icon-hamburger.svg'
    }
    
})