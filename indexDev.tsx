import React from 'react';
import ReactDOM from 'react-dom';
import ReactDates from './src/components/ReactDates';

ReactDOM.render(<ReactDates />, document.getElementById('root'));

//module.hot.accept();

declare const module: any;
if (module.hot) {
  module.hot.accept();
}
