import { shallow } from 'enzyme';
import React from 'react';
import Button from './index';

describe('button component', () => {
  it('renders as a <button>.', () => {
    const wrapper = shallow(<Button text="12345" />);
    expect(wrapper.is('button')).toEqual(true);
  });

  it('renders span element', () => {
    const wrapper = shallow(<Button text="12345" />);
    expect(wrapper.find('span').exists()).toEqual(true);
  });

  it('renders span element with text', () => {
    const wrapper = shallow(<Button text="12345" />);
    const spanElement = <span className="title">12345</span>;
    expect(wrapper.contains(spanElement)).toEqual(true);
  });

  it('renders button with class', () => {
    const wrapper = shallow(<Button buttonClass="testClass" text="12345" />);
    expect(wrapper.hasClass("testClass")).toEqual(true);
  });

  it('renders button with click handler attached', () => {
    let testPass = false;
    const clickHandler = () => {
      testPass = true;
    };

    const wrapper = shallow(
      <Button clickHandler={clickHandler} buttonClass="testClass" text="12345" />
    );

    expect(testPass).toEqual(false);
    wrapper.simulate('click');
    expect(testPass).toEqual(true);
  });
});
