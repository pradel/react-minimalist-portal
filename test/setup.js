import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdomLib from 'jsdom';

configure({ adapter: new Adapter() });

const jsdom = jsdomLib.jsdom;
const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};
