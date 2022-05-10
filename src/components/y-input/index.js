import yInput from './src/main';

/* istanbul ignore next */
yInput.install = function(Vue) {
  Vue.component(yInput.name, yInput);
};

export default yInput;
