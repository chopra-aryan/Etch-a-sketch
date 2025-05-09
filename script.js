
const container = document.querySelector('.container');

document.querySelector('.size-button').addEventListener('click', ()=> {
    const size = prompt("Enter the size of grid you want (N x N): ", 16);
    createGrid(size);  
})

createGrid(16);

function createGrid(size) {

    document.documentElement.style.setProperty('--size', size);
    container.innerHTML = '';

    for (i = 0; i < size*size; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', 'items');
        container.appendChild(div);
    }
    changeColorOnHover();
}

function changeColorOnHover() {
    document.querySelectorAll('.items').forEach((item) => item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'black';
    }));
}











