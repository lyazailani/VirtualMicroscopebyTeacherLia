// const btnEL = document.

//     btnEL.classList.add('special');
// });

const btnElList = document.querySelectorAll('.read_more');

btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        document.querySelector('.read_more:hover')?.classList.remove('read_more:hover');
        btnEl.classList.add('read_more:hover');
    });
});