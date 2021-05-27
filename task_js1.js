// Document Selection
let cartAdd = document.getElementsByClassName('btn');
cartAdd = Array.from(cartAdd);
let ulList = document.getElementById('ulList');

// Event Listener
cartAdd.map(item => {
    item.addEventListener('click', addBooks);
})
ulList.addEventListener('click', removeItem)
document.addEventListener('DOMContentLoaded', getTasks);
document.addEventListener('DOMContentLoaded', showEmpty);

//Functions
function addBooks(event) {
    ulList.previousElementSibling.style.display = 'none';
    let price = event.target.parentElement.children[0].innerText;
    //console.log(price)
    let bookName = event.target.parentElement.parentElement.children[1].innerText;
    let toBeAdd = bookName + ' ' + price + ' .';
    //console.log(toBeAdd)
    let list = document.createElement('li');
    list.textContent = toBeAdd + ' ';
    let link = document.createElement('a');
    link.setAttribute('href', '#');
    link.style.textDecoration = 'none';
    link.innerText = 'x';
    link.style.color = 'red';
    list.appendChild(link);
    ulList.appendChild(list);
    storeInLocalStorage(toBeAdd);

}
function removeItem(event) {
    if (event.target.parentElement.parentElement.children[1] == undefined && event.target.parentElement.parentElement.children[0] != undefined) {
        ulList.previousElementSibling.style.display = 'block';
    }
    // previous block is for Empty writing on the cart

    if (event.target.hasAttribute('href')) {
        if (confirm("Are you sure to delete? ")) {
            event.target.parentElement.remove();
            removeFromLS(event.target.parentElement);
        } else {
            ulList.previousElementSibling.style.display = 'none';
            console.log(event.target)
        }
    }
}

// add local storage here
function storeInLocalStorage(item) {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(item);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
// show data from ls
function getTasks() {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.map(item => {
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerText = 'x';
        link.style.textDecoration = 'none';
        link.style.color = 'red';
        let list = document.createElement('li');
        list.textContent = item;
        list.appendChild(link);
        ulList.appendChild(list);
    })
}
// Remove from ls
function removeFromLS(task) {
    task.lastChild.remove()
    let innerText = task.textContent.trim();
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let removeJustOne = true; // To delete just one item for just one click if any item appears several times.
    tasks.map((item, index) => {
        if (item == innerText && removeJustOne == true) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            removeJustOne = false;
        }
    })

}

function showEmpty() {
    if (ulList.children[0] != undefined) {
        ulList.previousElementSibling.style.display = 'none';
    }
}
