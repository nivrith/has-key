import { keyExists } from './../src/index';
import { expect } from 'chai';

describe('keyExists', () => {
  const object:any = {hello: 'world'};
  const array:any[] = ['hello', 2, 4]

  it('Returns true for existing key', () => {
    expect(keyExists(object, 'hello')).to.be.true;
  }),
  it('Returns false for invalid key', () => {
    expect(keyExists(object, 'bye')).to.be.false;
  })

  it('Return true for existing array key', () => {
    expect(keyExists(array, '0')).to.be.true
  })

  it('Return false for non existing array key', () => {
    expect(keyExists(array, 'bye')).to.be.false
  })

});