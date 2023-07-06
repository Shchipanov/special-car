// const images = document.querySelectorAll('[data-catalog-image]');

// const noImages = document.querySelectorAll('[data-catalog-text]');

// const decors = document.querySelectorAll('[data-catalog-decor]');

function removeImage() {
  const wrappers = document.querySelectorAll('[data-catalog-wrapper]');

  /* for (const wrapper of wrappers) {
    const catalogImage = wrapper.querySelector('[data-catalog-image]');
    if (catalogImage) {
      wrapper.querySelector('[data-catalog-decor]').style.display = 'none';
      wrapper.querySelector('[data-catalog-text]').style.display = 'none';
    }
  }*/

  // вариант с forEach
  wrappers.forEach((wrapper) => {
    const catalogImage = wrapper.querySelector('[data-catalog-image]');
    if (catalogImage) {
      wrapper.classList.add('catalog__image-wrapper--add-image');
      wrapper.querySelector('[data-catalog-decor]').style.display = 'none';
      wrapper.querySelector('[data-catalog-text]').style.display = 'none';
    }
  });

  /* не рабочий скрипт, скрывает только крайний item
  for (let i = 0; i < wrappers.length; i++) {
    if (!images[i]) {
      noImages[i].classList.add('catalog__image-text--add-image');
      decors[i].classList.add('catalog__decor--add-image');
    } else {
      noImages[i].classList.remove('catalog__image-text--add-image');
      decors[i].classList.remove('catalog__decor--add-image');
    }
  }*/
}


export {removeImage};
