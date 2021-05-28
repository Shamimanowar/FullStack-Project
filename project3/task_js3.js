let correct_ans = Math.ceil(Math.random() * 10);
let win = false;
for (let i = 0; i < 3; i++) {
    let userNumber = prompt('Guess a number between 1-10');
    if (correct_ans < userNumber) {
        alert('Correct answer is smaller!');
        continue;
    }
    else if (correct_ans > userNumber) {
        alert('Correct answer is greater!'); 1
        continue;
    }
    else {
        alert('You Win');
        win = true;
        break;
    }

}
if (win == false) {
    alert('You lose!')
}
