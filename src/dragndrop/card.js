/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { DragSource } from 'react-dnd';
import styles from './assets/styles.css';

const cardSource = {
  beginDrag() {
    return { a: 1 };
  },
  endDrag(props, monitor) {
    const pos = monitor.getSourceClientOffset();
    props.dragEnd(pos);
  },
};

@DragSource('CARD', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))
class Card extends Component {
  render() {
    const { isDragging, connectDragSource, pos } = this.props;

    return connectDragSource(<div
      className={styles.card}
      style={{
        left: pos.get('left'),
        top: pos.get('top'),
        opacity: isDragging ? 0 : 1,
      }}
    />);
  }
}

Card.propTypes = {
  connectDragSource: PropTypes.func,
  isDragging: PropTypes.bool,
  pos: PropTypes.object.isRequired,
};

Card.defaultProps = {
  connectDragSource() {},
  isDragging: false,
};

export default Card;
