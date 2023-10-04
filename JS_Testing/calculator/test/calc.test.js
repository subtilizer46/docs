const assert=require('chai').assert;
const check=require('../src/calc');
const {JSDOM} = require("jsdom")

const dom = new JSDOM(html);
global.document = dom.window.document;


describe('p Tag value check',()=>{
    it('value matches correctly',()=>{
        var result=check();
        assert.equal(result,'hello world')
    })
})