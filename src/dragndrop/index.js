/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import actionCreators from './actions';
import Card from './card';
import DropArea from './drop';

@DragDropContext(HTML5Backend)
class app extends React.PureComponent {
  render() {
    const { dragStart, dragEnd, card } = this.props;

    return (
      <div className="row">
        <div className="col-md-4 ">
          <Card
            dragStart={dragStart}
            dragEnd={dragEnd}
            pos={card}
          />
        </div>
        <div className="col-md-8">
          <DropArea />
        </div>
      </div>
    );
  }
}

app.propTypes = {
  dragStart: PropTypes.func.isRequired,
  dragEnd: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
};

export default (compose(connect(
  state => ({
    card: state.getIn(['dragndrop', 'card']),
  }),
  {
    dragStart: actionCreators.dragStart,
    dragEnd: actionCreators.dragEnd,
  },
))(app));
