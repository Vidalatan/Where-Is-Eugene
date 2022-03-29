function swapVisibility(hide, show) {
    document.getElementById(hide).setAttribute('style', 'visibility: hidden;')
    document.getElementById(show).setAttribute('style', 'visibility: visible;')
}



document.getElementById('startbtn').addEventListener('click',event => {
    swapVisibility('rules', 'level-1');
})

document.getElementById('level-1-area').addEventListener('click', event => {
    swapVisibility('level-1', 'level-2');
})

document.getElementById('level-2-area').addEventListener('click', event => {
    swapVisibility('level-2', 'level-3');
})

document.getElementById('level-3-area').addEventListener('click', event => {
    swapVisibility('level-3', 'level-4');
})

document.getElementById('level-4-area').addEventListener('click', event => {
    swapVisibility('level-4', 'level-5');
})

document.getElementById('level-5-area').addEventListener('click', event => {
    swapVisibility('level-5', 'level-6');
})

document.getElementById('level-6-area').addEventListener('click', event => {
    swapVisibility('level-6', 'level-7');
})

document.getElementById('level-7-area').addEventListener('click', event => {
    swapVisibility('level-7', 'level-8');
})

document.getElementById('level-8-area').addEventListener('click', event => {
    swapVisibility('level-8', 'level-9');
})

document.getElementById('level-9-area').addEventListener('click', event => {
    swapVisibility('level-9', 'cong');
})

