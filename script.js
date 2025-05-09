
const container = document.querySelector('.container');

// Adding event listener on Resize button to prompt user for the size of grid

document.querySelector('.size-button').addEventListener('click', ()=> {
    const size = prompt("Enter the size of grid you want (N x N): ", 16);
    createGrid(size);  
})

createGrid(16);

// function which creates the Grid, according to the input from user
function createGrid(size) {

    document.documentElement.style.setProperty('--size', size); //this line simply use inline styling to set the size attribute. documentElement implies <html></html>, after this line runs, it will look like <html style="size : size">
    container.innerHTML = ''; //deleting current grid before generating new one

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











