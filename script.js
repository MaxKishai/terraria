let click = 0;
changeBtn.onclick = function () {
    if (click === 0) {
        palitra.style.display = 'flex';
        click = 1;
    } else if (click === 1) {
        palitra.style.display = 'none';
        click = 0;
    }
}



red.onclick = function () {
    txt.style.color = 'red';
    txt2.style.color = 'red';
    palitra.style.display = 'none';
    let click = 0;

}
green.onclick = function () {
    txt.style.color = 'green';
    txt2.style.color = 'green';
    palitra.style.display = 'none';
    let click = 0;
}
blue.onclick = function () {
    txt.style.color = 'blue';
    txt2.style.color = 'blue';
    palitra.style.display = 'none';
    let click = 0;
}
yellow.onclick = function () {
    txt.style.color = 'yellow';
    txt2.style.color = 'yellow';
    palitra.style.display = 'none';
    let click = 0;
}
orange.onclick = function () {
    txt.style.color = 'orange';
    txt2.style.color = 'orange';
    palitra.style.display = 'none';
    let click = 0;
}
pink.onclick = function () {
    txt.style.color = 'pink';
    txt2.style.color = 'pink';2
    palitra.style.display = 'none';
    let click = 0;
}

function setBg() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}

let c = 0;

setting.onclick = function () {
    if (c == 0) {
        settWindow.style.display = 'block';
        wrap.style.filter = 'blur(5px)';
        c=1;
    }else{
        settWindow.style.display = 'none';
        wrap.style.filter = 'blur()';
        c=0;
    }
}
