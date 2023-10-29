const alertCopy = document.querySelector('.alert-copy');

document.querySelector('.e-mail').addEventListener('click', () => {
    const copyEmail = document.getElementById('email-copy');

    let section = document.createRange();
    section.selectNode(copyEmail);

    let transferArea = window.getSelection();
    transferArea.removeAllRanges();
    transferArea.addRange(section);

    document.execCommand('copy');

    transferArea.removeAllRanges();

    setTimeout(() => {
        alertCopy.style.display = 'block';
    }, 0);

    setTimeout(() => {
        alertCopy.style.display = 'none';
    }, 6000);
});
