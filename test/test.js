const should = require('chai').should()

const be = require('./..')

describe('be-of-type', () => {
  it('should be an object', () => {
    be.should.be.an('object')
  })
  it('should have a bumnch of methods', () => {
    Object.keys(be).map(k => be[k])
      .every(v => v.should.be.a('function'))
  })
  it('should recognize types correctly', () => {
    be.string('').should.be.true
    be.number(0b01).should.be.true
    be.plainObject({}).should.be.true
    be.array(process.argv).should.be.true
    be.boolean(0).should.be.false
  })
  it('should not consider objects without a prototype as objects', () => {
    be.plainObject(Object.create(null)).should.be.false
  })
  it('should detect buffers', () => {
    be.buffer(Buffer.from('fraud')).should.be.true
    be.buffer([]).should.be.false
  })
})
