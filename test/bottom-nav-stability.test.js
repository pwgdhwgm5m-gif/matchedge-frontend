const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');

test('bottom menu follows visible viewport and does not move on page scroll', () => {
  const listeners = new Map();
  const viewportListeners = new Map();
  const properties = new Map();
  const body = { appendChild(node) { node.parentElement = this; } };
  const nav = {
    parentElement: body, offsetHeight: 110,
    style: { setProperty(name,value) { properties.set(name,value); } }
  };
  const visualViewport = {
    height: 680, offsetTop: 0,
    addEventListener(name,fn) { viewportListeners.set(name,fn); }
  };
  const window = {
    innerHeight: 750, visualViewport,
    addEventListener(name,fn) { listeners.set(name,fn); }
  };
  const document = {
    readyState: 'complete', body,
    querySelector() { return nav; }
  };
  let pending;
  const code = fs.readFileSync(path.join(__dirname,'../bottom-nav-stability.js'),'utf8');
  vm.runInNewContext(code,{window,document,requestAnimationFrame:fn=>{pending=fn;return 1;}});
  pending();
  assert.equal(properties.get('top'),'570px');
  assert.equal(properties.get('bottom'),'auto');
  assert.equal(properties.get('transform'),'none');
  assert.equal(listeners.has('scroll'),false);
  visualViewport.height = 720;
  viewportListeners.get('resize')();
  pending();
  assert.equal(properties.get('top'),'610px');
});
