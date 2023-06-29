const wrappers = document.querySelectorAll('[data-catalog-wrapper]');

const images = document.querySelectorAll('[data-catalog-image]');

const noImages = document.querySelectorAll('[data-catalog-text]');

const decors = document.querySelectorAll('[data-catalog-decor]');

function removeImage() {

  for (let i = 0; i < wrappers.length; i++) {
    if (!images[i]) {
      noImages[i].classList.add('catalog__image-text--add-image');
      decors[i].classList.add('catalog__decor--add-image');
    } else {
      noImages[i].classList.remove('catalog__image-text--add-image');
      decors[i].classList.remove('catalog__decor--add-image');
    }
  }
}


export {removeImage};
