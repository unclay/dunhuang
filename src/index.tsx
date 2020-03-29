import React from 'react';
import ReactDom from 'react-dom';

function HelloWorld() {
  return <h1>hello wolrd</h1>;
}
ReactDom.render(<HelloWorld />, document.querySelector('#app'));