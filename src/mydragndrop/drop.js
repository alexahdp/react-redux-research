import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import styles from './assets/styles.css';

class Drop extends Component {
  constructor(props) {
    super(props);
    this.el = React.createRef();
  }

  componentDidMount() {
    const rect = this.el.getBoundingClientRect();
    document.addEventListener('mouseup', (e) => {
      if (this.props.dragType !== 'CARD') return;

      if (
        e.clientX > rect.left && e.clientX < rect.right &&
        e.clientY > rect.top && e.clientY < rect.bottom
      ) {
        console.log('YES'); // eslint-disable-line
      }
    });
  }

  render() {
    return (<div
      className={styles['drop-area']}
      ref={(el) => {
        this.el = el;
      }}
    />);
  }
}

Drop.propTypes = {
  dragType: PropTypes.string.isRequired,
};

Drop.defaultProps = {
};

export default (compose(connect(state => ({
  dragType: state.getIn(['mydragndrop', 'dragType']),
})))(Drop));
