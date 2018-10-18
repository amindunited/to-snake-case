/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const toSnakeCase = require('./index');
const expect = require('chai').expect
const expected = 'my_input_name';

describe('To Sanke Case', () => {

  it('should export a function', () => {
    expect(toSnakeCase).to.be.a('function');
  });

  it('should return Snake case from a Title case string', () => {
    expect(toSnakeCase('MyInputName')).to.equal(expected);
  });

  it('should return Snake case from a Camel case string', () => {
    expect(toSnakeCase('myInputName')).to.equal(expected);
  });

  it('should return Snake case from a Kebab case string', () => {
    expect(toSnakeCase('my-input-name')).to.equal(expected);
  });

});
