var menuBtn = document.getElementById('btnMenu')
var menuList = document.getElementsByClassName('menuOption')
var nav = document.getElementsByTagName('nav')[0]
var menuListArray = Array.from(menuList)

var mainBtnRight = document.getElementById('right')
var mainBtnLeft = document.getElementById('left')
var container = document.getElementsByClassName('container')[0]

menuBtn.addEventListener('click',showMenu)
mainBtnRight.addEventListener('click',passRight)
mainBtnLeft.addEventListener('click',passLeft)

var aux = true
function showMenu(){
    if(aux === true){
        menuBtn.firstElementChild.style.transition = '.3s'
        menuBtn.firstElementChild.style.transform = 'rotateZ(45deg) translateY(0.1875rem)'
        menuBtn.lastElementChild.style.transition = '.3s'
        menuBtn.lastElementChild.style.transform = 'rotateZ(-45deg) translateY(0)'
        nav.style.display = 'flex'
        var delay = 0
        menuListArray.reverse().forEach((menuOption) => {
            var aux = 0
            var timer = setTimeout(function(){
                if(aux > 0){
                    clearTimeout(timer)
                }
                menuOption.style.opacity = 1
                menuOption.style.transitionDuration = delay/2 + 'ms'
                menuOption.style.transitionDelay = delay + 'ms'
                aux++
                delay += 100
            },0)
        })
        aux = false
    }else{
        menuBtn.firstElementChild.style.transition = '.3s'
        menuBtn.firstElementChild.style.transform = 'rotateZ(30deg) translateY(.65rem)'
        menuBtn.lastElementChild.style.transition = '.3s'
        menuBtn.lastElementChild.style.transform = 'rotateZ(-30deg) translateY(-0.65rem)'
        nav.style.display = 'none'
        menuListArray.reverse().forEach((menuOption) => {
            menuOption.style.opacity = 0
        })
        aux = true
    }
}
function opacity(){

}

var scrolling = 0
var count = 0
function passRight(){
    if(count == container.childElementCount - 1){
        scrolling = scrolling
    }else{
        scrolling += 478
        count++
    }
    container.scroll(scrolling,0)
}
function passLeft(){
    if(count == 0){
        scrolling = scrolling
    }else{
        scrolling -= 478
        count--
    }
    container.scroll(scrolling,0)
}