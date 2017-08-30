import {expect} from 'chai'
import { JSDOM } from 'jsdom'
import 'babel-polyfill'

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true)
  })
})

describe('index.html', () => {
  it('should say hello', () => {
    JSDOM.fromFile('./src/index.html', 'utf-8').then(dom => {
      const h1 = dom.window.document.getElementsByTagName('h1')[0]
      expect(h1.innerHTML).to.equal('Hello World!')
    })
  })
})
