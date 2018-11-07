/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

beforeAll(() => {
  global.fetch = require('node-fetch');

  Object.defineProperty(global, 'document', {});
  Object.defineProperty(global, 'window', {});
});

configure({ adapter: new Adapter() });
