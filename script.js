let i = 0

function typeWriter() {
    let txt = "<h1> Karol Janowski </h1> console.log( 'Początkujący programista frontend' )"

    let speed = 50;
    if (i < txt.length) {
        document.querySelector(".code").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
setTimeout(typeWriter, 1000)


let spanMenu = Array.prototype.slice.call(document.querySelectorAll('.menu-projects span'))
let projectEl = Array.prototype.slice.call(document.querySelectorAll('.project'))

spanMenu.forEach(e => e.addEventListener('click', function () {
    for (let i = 0; i <= 3; i++) {
        spanMenu[i].classList.remove('span-active')
        projectEl[i].classList.remove('project-active')
    }
    e.classList.add('span-active')
    projectEl[spanMenu.indexOf(e)].classList.add('project-active')

}))