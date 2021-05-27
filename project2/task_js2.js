//let ids = document.querySelectorAll('#email, #phone, #post, #web');
//let [email, phone, post, operator] = [...ids];

let btn = document.getElementsByClassName('btn')
btn = Array.from(btn);
let comment = document.getElementById('comment');


// Event listerner
let validate = [email, phone, post, operator] // func list to run for events.
btn.map((item, index) => {
    item.addEventListener('click', validate[index])
})

// Functions

function email(event) {
    let value = event.target.previousElementSibling.previousElementSibling.value;
    let regx = /^[a-z | _][.\w]+@\w+\.\w+$/;
    //console.log(regx.test(value))
    if (regx.test(value) == true) {
        comment.innerHTML = `<h2> Yes! You entered a valid email.<br> ${value}</h2>`;
        event.target.previousElementSibling.previousElementSibling.value = '';

    } else {
        comment.innerHTML = `<h2> You entered a wrong email--!</h2> <br> ${value}`;
    }
}
function phone(event) {
    let value = event.target.previousElementSibling.previousElementSibling.value;
    value = value.replace('+88', '');
    let regx = /^01[13456789]\s*\d{2}[-]?\d{6}$/;
    if (regx.test(value) == true) {
        comment.innerHTML = `<h2> Yes! You entered a valid Phone Number.<br> ${value}</h2>`;
        event.target.previousElementSibling.previousElementSibling.value = '';
        return true
    } else {
        comment.innerHTML = `<h2> You entered a wrong Phone Number--!</h2> <br> ${value}`;
        return false
    }
}
function post(event) {
    let value = event.target.previousElementSibling.previousElementSibling.value;
    let regx = /^\d{4}$/;
    if (regx.test(value) == true) {
        comment.innerHTML = `<h2> Yes! You entered a valid Post Code.<br> ${value}</h2>`;
        event.target.previousElementSibling.previousElementSibling.value = '';

    } else {
        comment.innerHTML = `<h2> You entered a wrong Post Code--!</h2> <br> ${value}`;
    }
}
function operator(event) {
    let value = event.target.previousElementSibling.previousElementSibling.value;
    if (phone(event) == true) {
        let thirdDigit = value[2];
        let opList = [null, null, null, 'Grammen Phone', 'Banglalink', 'Teletalk', 'Airtel', 'Grammen Phone', 'Robi', "Banglalink"];
        comment.innerHTML = `<h2>You entered ${opList[thirdDigit]} number</h2>`;
    }
}
