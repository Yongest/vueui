import yInput from './components/y-input/index.js';

const components = [
    yInput
]

const install = function(Vue, opts = {}) {
   
    components.forEach(component => {
      Vue.component(component.name, component);
    });

  };

export default{
    version: '0.1.3',
    install,
    yInput
}