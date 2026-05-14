const modal = document.getElementById('modal');
const modalImage = document.querySelector('.modal__image');
const modalTitle = document.querySelector('.modal__title');
const modalDescription = document.querySelector('.modal__description');
const modalTechStack = document.querySelector('.modal__tech-stack');
const modalCategory = document.querySelector('.modal__category');
const modalClose = document.querySelector('.modal__close');
const modalBackdrop = document.querySelector('.modal__backdrop');
const cards = document.querySelectorAll('.card');

// data for each card — keep this in sync with your HTML cards
const projects = [
  {
    title: 'Volleyball Infographic Poster',
    category: 'Graphic Design',
    description: 'An activity meant to equip students with the fundamental rules and nature of volleyball.',
    image: './assets/img/volleyball_infographic.png',
    tech_stack: 'Technology used: Photoshop',
  },
  {
    title: 'Last and First Principles',
    category: 'Graphic Design',
    description: 'An activity meant to showcase the students’ photography skills, as well as their photo manipulation skills. ',
    image: './assets/img/magazine_movie_poster/last_and_first_orinciples.png',
    tech_stack: 'Technology used:  Photoshop, Blender (for background)',
  },
  {
    title: 'NOIR',
    category: 'Graphic Design',
    description: 'An activity meant to showcase the students’ photography skills, as well as their photo manipulation skills. ',
    image: './assets/img/magazine_movie_poster/noir.png',
    tech_stack: 'Technology used: Photoshop',
  },
  {
    title: 'SnapAura Website',
    category: 'UI Design',
    description: 'A project focusing on the basics on HTML and CSS. Additionally highlighting the students’ photography skills.',
    image: './assets/img/snapaura_website/snapaura_rolling_screenshot.png',
    tech_stack: 'Technology used: HTML, & CSS',
  },
  {
    title: 'TAMBUTSO Website',
    category: 'UI Design',
    description: 'A project focusing on the basics of HTML and CSS, that includes form handling.',
    image: './assets/img/tambutso_website/tambutso_rolling_screenshot.png',
    tech_stack: 'Technology used: HTML, CSS, & Google Forms',
  }
  // add one object per card
];

// open modal
cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    const project = projects[index];

    modalImage.src = project.image;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalCategory.textContent = project.category;
    modalTechStack.textContent = project.tech_stack;

    modal.classList.add('is-open');
  });
});

// close on X button
modalClose.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

// close on backdrop click
modalBackdrop.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

// close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('is-open');
  }
});