import yBarcodeInput from './src/main';

/* istanbul ignore next */
yBarcodeInput.install = function(Vue) {
  Vue.component(yBarcodeInput.name, yBarcodeInput);
};

export default yBarcodeInput;
