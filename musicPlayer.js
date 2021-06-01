var menuBtn = document.getElementById('btnMenu')
var menuList = document.getElementsByClassName('menuOption')
var nav = document.getElementsByTagName('nav')[0]
var menuListArray = Array.from(menuList)

menuBtn.addEventListener('click',showMenu)

var aux = true
function showMenu(){
    if(aux === true){
        menuBtn.firstElementChild.style.transition = '.5s'
        menuBtn.firstElementChild.style.transform = 'rotateZ(45deg) translateY(0.1875rem)'
        menuBtn.lastElementChild.style.transition = '.5s'
        menuBtn.lastElementChild.style.transform = 'rotateZ(-45deg) translateY(0)'
        nav.style.display = 'flex'
        setInterval(appear,300)
        aux = false
    }else{
        menuBtn.firstElementChild.style.transition = '.5s'
        menuBtn.firstElementChild.style.transform = 'rotateZ(30deg) translateY(.65rem)'
        menuBtn.lastElementChild.style.transition = '.5s'
        menuBtn.lastElementChild.style.transform = 'rotateZ(-30deg) translateY(-0.65rem)'
        nav.style.display = 'none'
        menuListArray.forEach((menuOption) => menuOption.style.opacity = '0')
        aux = true
    }
}
var i = menuListArray.length - 1
function appear(){
    menuListArray[i].style.opacity = '1'
    i--
}