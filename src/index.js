import React from 'react'
import {render} from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux';
import App from './App'
import store from './store'


import Template from './Template'


/* Client render (optional) */
if (typeof document !== 'undefined') {
  const outlet = document.getElementById('outlet')
  render( (
    <Provider store={store}>
      <App />
    </Provider>
  ), outlet)
}

/* Exported static site renderer */
export default (locals, callback) => {


    var html = ReactDOMServer.renderToStaticMarkup(
      <Provider store={store}>
        <Template>
          <App />
        </Template>
      </Provider>
    );
    callback(null, html)

}
