// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import styles from './assets/styles.css';

type Props = {
  name: number
};

const app = (props: Props): (React.Node) => (
  <div className={styles.app}>
    <h1>Hello, {props.name}</h1>
  </div>
);

const mapStateToProps = state => ({
  name: state.app.name,
});

const mapDispatchToProps = dispatch => ({}) // eslint-disable-line

export default connect(mapStateToProps, mapDispatchToProps)(app);
