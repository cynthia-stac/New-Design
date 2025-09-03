const menu = document.getElementsByClassName('menu')[0]
const open = document.getElementsByClassName('open')[0]
const close = document.getElementsByClassName('close')[0]

open.addEventListener(('click'), () =>{
    menu.classList.toggle('hidden')
    open.classList.toggle('hidden')
    close.classList.toggle('hidden')
})

close.addEventListener(('click'), () =>{
    menu.classList.toggle('hidden')
    open.classList.toggle('hidden')
    close.classList.toggle('hidden')
})