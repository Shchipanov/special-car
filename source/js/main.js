import {iosVhFix} from './utils/ios-vh-fix';

import {addText} from './modules/adding-text';
import {sliderTrainers, removeNotJs, sliderAdvt} from './modules/slider';
import {removeImage} from './modules/catalog-image';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    addText();
    sliderTrainers();
    removeNotJs();
    sliderAdvt();
    removeImage();
  });
});
