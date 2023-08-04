const hamburgermenu = document.querySelector('.fa-align-justify');
const container = document.querySelector('.container');


hamburgermenu.addEventListener('click', () => {
    container.classList.toggle('active')
}
)

$(".fa-align-justify").click(function(){
    $(this).toggleClass(".fas fa-times");
});