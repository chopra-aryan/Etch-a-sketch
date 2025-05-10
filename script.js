
const container = document.querySelector('.container');

// Adding event listener on Resize button to prompt user for the size of grid

document.querySelector('.size-button').addEventListener('click', ()=> {
    const size = Number(prompt("Enter the size of grid you want (N x N): ", 16));
    if (size > 0 && size <=100 && Number.isInteger(size)){
        createGrid(size); 
    }
    else {
        alert("Enter a valid integer value between 1 and 100!");
    }

     
})

createGrid(16);

// function which creates the Grid, according to the input from user
function createGrid(size) {

    document.querySelector('.container').style.setProperty('--size', size); //this line use inline styling to set the size attribute. documentElement implies <html></html>, after this line runs, it will look like <html style="size : size">
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
        item.style.backgroundColor = getRandomColor();
        item.style.opacity = 0.1;
// code below increases opacity by 0.1 (10%) on each hover 
        item.addEventListener('mouseenter', ()=> {
            let currentOpacity = parseFloat(item.style.opacity);
            if (currentOpacity < 1) {
                item.style.opacity = Math.min(currentOpacity + 0.1, 1).toString(); // this makes sure that opacity doesn't exceed 1
            }
        })
    }));
}

function getRandomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    

    return `rgb(${r},${g},${b})`;
}











