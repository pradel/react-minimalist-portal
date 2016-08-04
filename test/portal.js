import React from 'react';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import Portal from '../src/portal';

describe('Portal', () => {
  it('should not be in current react three', () => {
    const element = <p>Hello</p>;
    const wrapper = shallow(<Portal>{element}</Portal>);
    assert.equal(wrapper.find(element).length, 0);
  });

  it('should be rendered in a new react three', () => {
    assert.match(document.documentElement.innerHTML, /Hello/);
  });
});
