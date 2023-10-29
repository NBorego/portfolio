// Links nav
const home = document.getElementById('home');
const sobre = document.getElementById('sobre');
const tec = document.getElementById('tecnologias');
const projetos = document.getElementById('projetos');
const contatos = document.getElementById('contatos');

const targetHome = document.querySelector('header');
const targetAbout = document.querySelector('article.about');
const targetTechnologies = document.querySelector('section.technologies');
const targetProjects = document.querySelector('section.my-projects');
const targetContatos = document.querySelector('footer');

home.addEventListener('click', () => {
    targetHome.scrollIntoView({ behavior: 'smooth' });
});

sobre.addEventListener('click', () => {
    targetAbout.scrollIntoView({ behavior: 'smooth' });
});

tec.addEventListener('click', () => {
    targetTechnologies.scrollIntoView({ behavior: 'smooth' });
});

projetos.addEventListener('click', () => {
    targetProjects.scrollIntoView({ behavior: 'smooth' });
});

contatos.addEventListener('click', () => {
    targetContatos.scrollIntoView({ behavior: 'smooth' });
});
