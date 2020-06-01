/* global beforeEach, afterEach */

import { resolve } from 'path'
import { JSDOM } from 'jsdom'

beforeEach(async () => {
  const dom = await JSDOM.fromFile(resolve(__dirname, 'src/index.html'), null)
  global.document.body.innerHTML = dom.window.document.body.innerHTML
})

afterEach(() => {
  global.document.body.innerHTML = ''
})
