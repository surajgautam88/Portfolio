const links = document.querySelector('a')
const menuBtn = document.getElementById('menu')
const crossBTN = document.getElementById('cross')
const nameBOX = document.getElementById('name')
const emailBOX = document.getElementById('email')
const messageBOX = document.getElementById('message')
const submitBTN = document.getElementById('submit')
submitBTN.addEventListener('click', () => {
    setTimeout(() => {
        nameBOX.value = ""
        emailBOX.value = ""
        messageBOX.value = ""
    }, 1000);
})


links.addEventListener('click', (event) => {
    event.preventDefault;
})

 const mentBTN = document.querySelector('#img')
 const sideBAR = document.querySelector('.second-container')
// side menu logic start from here

menuBtn.addEventListener('click', () => {
    sideBAR.style.display ='flex'
    menuBtn.style.display ='none'
    
})
crossBTN.addEventListener('click', () => {
    sideBAR.style.display ='none'
    menuBtn.style.display ='flex'
    
})

function outerBox(){
    setTimeout(() => {
        document.querySelector('.outerPreloaderBox').style.display = 'none'
        document.querySelector('.boss-container').style.filter = 'none'
    }, 1000);
}

window.addEventListener('load', () => {
    setTimeout(() => {
           document.querySelector('.innerPreloaderBox').style.display = 'none'
           document.querySelector('.boss-container').style.filter = 'blur(4px)'
           
           outerBox();
    }, 3000);
})


