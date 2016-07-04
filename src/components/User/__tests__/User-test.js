/* eslint-disable */
jest.unmock('../User');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import User from '../User';
describe('User', () => {
  it('assert equal a string', () => {
    const aString = "a";
    expect(aString).toEqual("a");
  });
});