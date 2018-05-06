/* global expect:true */
import _ from 'lodash';
import { addBook } from '../sagas';

describe('test saga', () => {
  it(' ', () => {
    const book = {
      author: 'Pelevin',
      title: 'Ananasnaya voda',
      pages: 1000,
    };
    const gen = addBook({ payload: book });
    const newBook = gen.next().value.PUT.action.payload;
    expect(newBook).toBeDefined();
    expect(_.omit(newBook, ['_id'])).toEqual(book);
    expect(newBook._id).toBeDefined();
  });
});
