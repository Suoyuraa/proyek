const container = document.querySelector('.container');
const yuna = document.querySelector('.yuna');
const yura = document.querySelector('.yura');

yuna.onclick = () => {
    container.classList.add('active');
};

yura.onclick = () => {
    wrapper.classList.remove('active');
};
