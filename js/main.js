document.querySelector('.morning').addEventListener('click',morn)
document.querySelector('.afternoon').addEventListener('click',after)
document.querySelector('.evening').addEventListener('click',even)
document.querySelector('.night').addEventListener('click',nig)

function morn(){
    document.querySelector('body').style.backgroundImage = "url('./img/morningimage.jpg')"
}
function after(){
    document.querySelector('body').style.backgroundImage =  "url('./img/afternoon.jpg')"
}
function even(){
    document.querySelector('body').style.backgroundImage =  "url('./img/evening.jpg')"
}
function nig(){
    document.querySelector('body').style.backgroundImage =  "url('./img/night.jpg')"
}