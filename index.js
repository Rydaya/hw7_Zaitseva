//Hw1

const newToDo = document.querySelector('#newToDo');
const AddToDo = document.querySelector('#AddToDo');
const toDoList = document.querySelector('#toDoList');

AddToDo.addEventListener('click', () => {
    const listItem = document.createElement('li')
    listItem.classList.add('listItem');
    toDoList.appendChild(listItem);

    const doneCheckbox = document.createElement('input')
    doneCheckbox.type = 'checkbox';
    doneCheckbox.classList.add('doneCheckbox');
    listItem.appendChild(doneCheckbox);

    const todoText = document.createElement('span')
    todoText.innerText = newToDo.value;
    todoText.classList.add('todoText');
    listItem.appendChild(todoText);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('removeButton');
    listItem.appendChild(removeButton);

    newToDo.value = '';

    removeButton.addEventListener('click', () => {
        listItem.remove();
    });

    doneCheckbox.addEventListener('change', () => {
        todoText.classList.add('done');
    });
});

//Hw2

const n = 5;

//Цикл
let resultLoop = 0;
for (let i = 1; i <= 5; i++) {
    resultLoop += i;
}
console.log(resultLoop);

//Рекурсия
function getResultRecursion(n) {
    if (n <= 1) {
        return n;
    }
    return n + getResultRecursion(n - 1);
}
console.log(getResultRecursion(5));

//Hw3

//setInterval
const byInterval = document.querySelector('.byInterval');

function printNumbers(from, to) {
    let interval = setInterval(() => {
        if (from < to) {
            let result = from += 1;
            byInterval.innerHTML = result;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

printNumbers(1, 10);

//setTimeout

const byTimeout = document.querySelector('.byTimeout');

function printNumbers1(from, to) {
    let timer = setTimeout(function tick() {
        if (from < to) {
            let result = from += 1;
            byTimeout.innerHTML = result;
            setTimeout(tick, 1000);
        }
        clearTimeout(timer);
    }, 1000);
}

printNumbers1(12, 17);

//Hw4
let sec = 0;
const intervalFromStart = setInterval(function () {
    if (sec >= 5) {
        clearInterval(intervalFromStart);
    } else {
        sec++;
        console.log(`Прошло: ${sec} сек`);
    }
}, 1000);