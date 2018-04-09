import * as React from 'react';
import { connect } from 'react-redux';
import { mapProps, compose, withHandlers } from 'recompose';
import { reduxForm, Field, reset as resetForm } from 'redux-form/immutable';
import Immutable from 'immutable';
import actions from '../booklist/actions';

const app = ({ handleSubmit, reset, mode }) => ( // eslint-disable-line
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <div>
        <Field
          name="author"
          component="input"
          type="text"
          className="form-control"
          placeholder="Author"
          required
        />
      </div>
    </div>
    <div className="form-group">
      <div>
        <Field
          name="title"
          component="input"
          type="text"
          className="form-control"
          placeholder="Title"
          required
        />
      </div>
    </div>
    <div className="form-group">
      <div>
        <Field
          name="pages"
          component="input"
          type="number"
          className="form-control"
          placeholder="Pages"
        />
      </div>
    </div>
    <div className="form-group">
      <button
        type="button"
        onClick={reset}
        className="mb-4 btn btn-warning"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="mb-4 btn btn-primary"
      >
        {mode === 'edit' ? 'Update' : 'Add' }
      </button>
    </div>
  </form>
);

const formName = 'book-edit';

export default (compose(
  mapProps(props => ({
    // for reduxForm
    initialValues: props.editBook || Immutable.fromJS({ author: '', title: '', pages: '' }),
    mode: props.editBook ? 'edit' : 'add',
  })),

  reduxForm({
    destroyOnUnmount: false,
    enableReinitialize: true,
    form: formName,
    validate: values => values,
  }),

  connect(
    state => ({
      form: state.getIn(['form', formName, 'values']),
    }),
    {
      addBook: actions.addBook,
      updateBook: actions.updateBook,
      unsetEeditBook: actions.unsetEeditBook,
      resetFormFields: () => resetForm(formName),
    },
  ),

  withHandlers({
    reset: props => () => {
      props.resetFormFields();
      props.unsetEeditBook();
    },
    handleSubmit: props => (e) => {
      e.preventDefault();
      const book = {
        author: props.form.get('author'),
        title: props.form.get('title'),
        pages: props.form.get('pages'),
      };

      if (props.editBook) {
        book._id = props.editBook.get('_id');
        props.updateBook(book);
      } else {
        props.addBook(book);
      }
      props.resetFormFields();
    },
  }),
)(app));
