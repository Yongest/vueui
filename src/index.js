import yInput from './components/y-input/index.js';
import yBarcodeInput from './components/y-barcode-input/index.js';
  
const components = [
    yInput,
    yBarcodeInput
]

const install = function(Vue, opts = {}) {
   
    components.forEach(component => {
      Vue.component(component.name, component);
    });

  };

export default{
    version: '0.5.0',
    install,
    yInput,
    yBarcodeInput
}