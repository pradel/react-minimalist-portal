import React from 'react';
import { shallow, mount } from 'enzyme';
import { assert } from 'chai';
import Portal from '../src/portal';

describe('Portal', () => {
  it('should not be in current react three', () => {
    const element = <p>Hello</p>;
    const wrapper = shallow(<Portal>{element}</Portal>);
    assert.equal(wrapper.find(element).length, 0);
    wrapper.unmount();
  });

  it('should be rendered in a new react three', () => {
    const element = <p>Hello</p>;
    const wrapper = shallow(<Portal>{element}</Portal>);
    assert.match(document.documentElement.innerHTML, /Hello/);
    wrapper.unmount();
  });

  it('should update props', () => {
    const element = <p>Hello</p>;
    const wrapper = mount(<Portal>{element}</Portal>);
    assert.match(document.documentElement.innerHTML, /Hello/);
    const prop = <p>Hi</p>;
    wrapper.setProps({ children: prop });
    assert.match(document.documentElement.innerHTML, /Hi/);
    wrapper.unmount();
  });

  it('should unmount', () => {
    const element = <p>Hello</p>;
    const wrapper = shallow(<Portal>{element}</Portal>);
    assert.match(document.documentElement.innerHTML, /Hello/);
    wrapper.unmount();
    assert.notMatch(document.documentElement.innerHTML, /Hello/);
  });
});
