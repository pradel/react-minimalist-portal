import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import Portal from '../src/portal';

describe('Portal', () => {
  it('should not be in current react three', () => {
    const element = <p>Hello</p>;
    const wrapper = mount(<Portal>{element}</Portal>);
    assert.equal(wrapper.find(element).length, 0);
    wrapper.unmount();
  });

  it('should be rendered in a new react three', () => {
    const element = <p>Hello</p>;
    const wrapper = mount(<Portal>{element}</Portal>);
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
    const wrapper = mount(<Portal>{element}</Portal>);
    assert.match(document.documentElement.innerHTML, /Hello/);
    wrapper.unmount();
    assert.notMatch(document.documentElement.innerHTML, /Hello/);
  });

  it('should use the container prop to render the content', () => {
    const container = document.createElement('a');
    document.body.appendChild(container);
    const element = <p>Hello</p>;
    const wrapper = mount(<Portal container={container}>{element}</Portal>);
    assert.match(document.documentElement.innerHTML, /<a><p>Hello<\/p><\/a>/);
    wrapper.unmount();
  });
});
