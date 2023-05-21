let click = 0;

changeBtn.onclick = function(){
    if(click === 0){
        palitra.style.display = 'flex'
        click = 1
    } else if (click = 1){
        palitra.style.display = 'none'
        click = 0
    }
}

blackt.onclick = function(){
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    txt.style.color = 'white'
    changeBtn.style.border = "1px solid white"
    random.style.border = "1px solid white"
}

whitet.onclick = function(){
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    txt.style.color = 'black'
    changeBtn.style.border = "1px solid black"
    random.style.border = "1px solid black"
}

red.onclick = function(){
    txt.style.color = 'red'
    palitra.style.display = 'none'
}
blue.onclick = function(){
    txt.style.color = 'blue'
    palitra.style.display = 'none'
}
green.onclick = function(){
    txt.style.color = 'green'
    palitra.style.display = 'none'
}
yellow.onclick = function(){
    txt.style.color = 'yellow'
    palitra.style.display = 'none'
}
pink.onclick = function(){
    txt.style.color = 'pink'
    palitra.style.display = 'none'
}
orange.onclick = function(){
    txt.style.color = 'orange'
    palitra.style.display = 'none'
}

function settBg(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor
}

let clicker = 0;
settings.onclick = function(){
    if(clicker === 0) {
        settWindow.style.display = 'block'
        wrap.style.filter = 'blur(5px)'
        clicker = 1
    }else if(clicker === 1){
        settWindow.style.display = 'none'
        wrap.style.filter = 'blur(0)'
        clicker = 0
    }
}