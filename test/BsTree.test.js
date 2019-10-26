const { assert } = require('chai');
const BsTree = require('../src/BsTree');

describe('BsTree', () => {
    it('BsTree is object', () => {
        assert.isObject(new BsTree());
    })
})

describe('BsTree.add', () => {
    let bsTree = null;

    beforeEach(() => {
        bsTree = new BsTree();
    });

    it('should add an elemnt correctly (undefined, 93)', () => {
        const arr = undefined;
        const value = 93;
        const expectedSize = 1;
        const expectedArray = [93];
        bsTree.init(arr);

        bsTree.add(value);

        assert.deepEqual(bsTree.getSize(), expectedSize);
        assert.deepEqual(bsTree.toArray(), expectedArray);
    })
})