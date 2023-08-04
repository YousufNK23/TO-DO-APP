
const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');


signUpBtn.onclick = () => {
    formBx.classList.add("active");
    body.classList.add("active");
}
signInBtn.onclick = () => {
    formBx.classList.remove("active")
    body.classList.remove("active");
}
