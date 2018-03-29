// @flow

import * as React from 'react';
import { connect } from 'react-redux';

type Props = {
  name: number
};

const app = (props: Props): (React.Node) => (
  <div className="app">
    <h1>Hello, {props.name}</h1>
  </div>
);

const mapStateToProps = state => ({
  name: state.name,
});

const mapDispatchToProps = dispatch => ({}) // eslint-disable-line

export default connect(mapStateToProps, mapDispatchToProps)(app);
