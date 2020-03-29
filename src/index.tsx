import React from 'react';
import ReactDom from 'react-dom';

function HelloWorld() {
  const data: any = {
    code: {
      qq: 23
    }
  };
  return <h1>hello wolrd {data.code?.qq}</h1>;
}
ReactDom.render(<HelloWorld />, document.querySelector('#app'));