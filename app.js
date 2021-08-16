const body = document.querySelector('body');
const newContainer = document.createElement('div');
const btn = document.querySelector('button')


newContainer.classList.add('container');
body.appendChild(newContainer);

let colors = ['red', 'blue', 'green', 'yellow']


function createDivs(x) {
    let divArr = [];
    for(let i = 0; i < x; i++){
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid')
        divArr.push(newDiv);
    }
    divArr.forEach(div => {
        newContainer.appendChild(div)
    })
}

function hover() {
    document.addEventListener('mouseover', () => {
        
    })
}

function chooseDivNumber(func){
    document.addEventListener('click', (e) => {
        e.preventDefault();
        
    })
}

createDivs(16);

/* for (let i = 0; i < 16; i++){
    let newDiv = document.createElement('div');
    newDiv.classList.add('grid')
    newContainer.appendChild(newDiv)
} */