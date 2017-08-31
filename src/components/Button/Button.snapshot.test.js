import React from 'react';
import Button from './index';
import renderer from 'react-test-renderer';

describe('button component snapshot test', () => {
  it('takes snapshot of a button component with class and text', () => {
    const json = renderer.create(
      <Button buttonClass="testClass" text="12345" />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });
});
