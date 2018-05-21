/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import actionCreators from './actions';
import styles from './assets/styles.css';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      isDragged: false,
      offsetX: 0,
      offsetY: 0,
      posX: 0,
      posY: 0,
    };
    this.dragStart = this.dragStart.bind(this);
    this.dragStop = this.dragStop.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousemove', (e) => {
      if (this.state.isDragged) {
        this.setState({
          posX: e.screenX - this.state.offsetX,
          posY: e.screenY - this.state.offsetY,
        });
      }
    });
  }

  dragStart(e) {
    this.setState({
      isDragged: true,
      offsetX: e.screenX - e.target.offsetLeft,
      offsetY: e.screenY - e.target.offsetTop,
    });

    this.props.dragStart('CARD');
  }

  dragStop() {
    this.setState({
      isDragged: false,
    });
  }

  render() {
    return (<div
      role="card"
      className={styles.card}
      onMouseDown={this.dragStart}
      onMouseUp={this.dragStop}
      style={{
        left: this.state.posX,
        top: this.state.posY,
        opacity: 1,
        zIndex: this.state.isDragged ? 1000 : 10,
      }}
    />);
  }
}

Card.propTypes = {
  dragStart: PropTypes.func.isRequired,
};

Card.defaultProps = {
};

export default (compose(connect(
  state => ({}), // eslint-disable-line
  {
    dragStart: actionCreators.dragStart,
  },
))(Card));
