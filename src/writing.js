const text = document.querySelector('.dev-strong');

const textLoad = () => {
    setTimeout(() => {
        text.textContent = 'Nicolas Borego';
    }, 0);

    setTimeout(() => {
        text.textContent = 'Dev Front-End ';
    }, 5000);
}

textLoad();
setInterval(textLoad, 10000);
