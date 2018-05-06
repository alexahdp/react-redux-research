/* global expect:true */
import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import reducer from '../reducers';
import App from '../index';

configure({ adapter: new Adapter() });

describe('library tests', () => {
  it('render book list', () => {
    const store = createStore(reducer, Immutable.fromJS({
      library: {
        editBook: null,
        books: [{
          author: 'Pelevin',
          title: 'Ananasnaya voda',
          pages: 1000,
          _id: 1000,
        }],
      },
    }));
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    expect(div.querySelectorAll('form').length).toBe(1);
  });


  it('render empty book list', () => {
    const store = createStore(reducer, Immutable.fromJS({
      library: {
        editBook: null,
        books: [],
      },
    }));

    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    expect(div.querySelectorAll('h3').length).toBe(1);
    expect(div.querySelector('h3').textContent).toEqual('Books list is empty');
  });
});
