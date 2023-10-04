const assert=require('chai').assert;
const add=require('../src/addition');

describe('Addition Function',()=>{
    it('should add two numbers correctly',()=>{
        const result=add(10,20)
        assert.equal(result,30)
    })
})

describe('Addition Function',()=>{
    it('should add two negative numbers correctly',()=>{
        const result=add(-10,20)
        assert.equal(result,10)
    })
})