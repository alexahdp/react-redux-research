import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import styles from './assets/styles.css';

// TODO
// styles.dropArea

const spec = {
  drop() {},
  hover() {},
};

@DropTarget('CARD', spec, (connect, monitor) => ({
  highlighted: monitor.canDrop(),
  hovered: monitor.isOver(),
  connectDropTarget: connect.dropTarget(),
}))
class Drop extends Component {
  render() {
    const { connectDropTarget } = this.props;

    return connectDropTarget(<div className={styles['drop-area']} />);
  }
}

Drop.propTypes = {
  connectDropTarget: PropTypes.func,
};

Drop.defaultProps = {
  connectDropTarget() {},
};

export default Drop;
