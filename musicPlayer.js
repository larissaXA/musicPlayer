var menuBtn = document.getElementById('btnMenu')
var menuList = document.getElementsByClassName('menuOption')
var nav = document.getElementsByTagName('nav')[0]
var menuListArray = Array.from(menuList)

var mainBtnRight = document.getElementById('right')
var mainBtnLeft = document.getElementById('left')
var container = document.getElementsByClassName('container')[0]

var addBtn = document.getElementById('add')
var addDoneBtn = document.getElementById('done')
var inputSongName = document.getElementById('inputSongName')
var inputSongSinger = document.getElementById('inputSongSinger')
var cancel = document.getElementById('cancel')

var theme = document.getElementById('themeContainer')

menuBtn.addEventListener('click',showMenu)
mainBtnRight.addEventListener('click',passRight)
mainBtnLeft.addEventListener('click',passLeft)
addBtn.addEventListener('click',function(){
    var addSongBox = document.getElementById('addSongBox')
    addSongBox.style.display = 'flex'
    this.style.display = 'none'
})
addDoneBtn.addEventListener('click',addNewSong)
cancel.addEventListener('click',function(){
    var addSongBox = document.getElementById('addSongBox')
    addSongBox.style.display = 'none'
    addBtn.style.display = 'flex'
})
theme.addEventListener('click',changeTheme)

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

function addNewSong(){
    var clone = document.getElementsByClassName('songBox')[0].cloneNode(true)
    clone.style.display = 'flex'
    clone.getElementsByClassName('delete')[0].addEventListener('click',deleteSongBox)
    var texts = clone.getElementsByClassName('texts')[0]
    var songName = texts.getElementsByClassName('songName')[0]
    var songSinger = texts.getElementsByClassName('songAuthor')[0]
    songName.innerHTML = inputSongName.value
    inputSongName.value = ''
    songSinger.innerHTML = inputSongSinger.value
    inputSongSinger.value = ''
    var addSongBox = document.getElementById('addSongBox')
    addSongBox.style.display = 'none'
    addBtn.style.display = 'flex'
    var addSong = document.getElementById('addSong')
    container.insertBefore(clone,addSong)
}

function deleteSongBox(){
    if(confirm('Tem certeza que deseja excluir essa música de sua playlist?')){
        this.parentElement.parentElement.parentElement.remove()
    }
    
}

function changeTheme(){
    document.getElementsByTagName('body')[0].style.backgroundColor == 'turquoise' ? document.getElementsByTagName('body')[0].style.backgroundColor = '#c71585' : document.getElementsByTagName('body')[0].style.backgroundColor = 'turquoise'

    document.getElementsByTagName('body')[0].style.backgroundImage == 'linear-gradient(0deg, seashell 0%, turquoise 95%)' ? document.getElementsByTagName('body')[0].style.backgroundImage = 'linear-gradient(0deg, black 0%, #c71585 95%)' : document.getElementsByTagName('body')[0].style.backgroundImage = 'linear-gradient(0deg, seashell 0%, turquoise 95%)'

    Array.from(document.getElementsByClassName('texts')).forEach((value) => {
        value.style.color == 'lightseagreen' ? value.style.color = 'magenta' : value.style.color = 'lightseagreen'
        value.style.textShadow == '1px 1px 2px white' ? value.style.textShadow = '1px 1px 2px black' : value.style.textShadow = 'initial'
    })
    Array.from(document.getElementsByClassName('btnPassSong')).forEach((value) => {
        value.classList.contains('mainBtnSeagreen') ? value.classList.remove('mainBtnSeagreen') : value.classList.add('mainBtnSeagreen')
    })
    document.getElementById('addSong').classList.contains('addSongSeagreen') ? document.getElementById('addSong').classList.remove('addSongSeagreen') : document.getElementById('addSong').classList.add('addSongSeagreen')

    menuBtn.classList.contains('addSongSeagreen') ? menuBtn.classList.remove('addSongSeagreen') : menuBtn.classList.add('addSongSeagreen')

    theme.classList.contains('addSongSeagreen') ? theme.classList.remove('addSongSeagreen') : theme.classList.add('addSongSeagreen')
}