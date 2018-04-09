// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import styles from './assets/styles.css';

const app = () => (
  <div className={styles.app}>
    <div className="container">
      <h1>Home page</h1>
    </div>
  </div>
);

export default connect()(app);
