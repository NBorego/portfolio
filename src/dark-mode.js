const switchButton = document.querySelector('.switch-button');
const links = document.querySelector('.link-navigation');
const switchIconImage = document.querySelector('#switch-img');
const body = document.querySelector('body');
const root = document.documentElement;

var theme = 'light';

switchButton.addEventListener('click', () => {
    // if (switchButton.style.justifyContent === 'flex-start')
    if (theme === 'light') {
        theme = 'dark';

        switchIconImage.src = '../assets/moon.svg';
        switchButton.style.justifyContent = 'flex-end';

        root.style.setProperty('--gray', '#1E293B');
        root.style.setProperty('--very-gray', '#334155');
        root.style.setProperty('--slate', '#fff');
        root.style.setProperty('--white', '#0f172a');
    } else {
        theme = 'light';

        switchIconImage.src = '../assets/sun.svg';
        switchButton.style.justifyContent = 'flex-start';

        root.style.setProperty('--very-gray', '#9ca3af');
        root.style.setProperty('--gray', '#E5E7EB');
        root.style.setProperty('--slate', '#0f172a');
        root.style.setProperty('--white', '#fff');
    }
});
