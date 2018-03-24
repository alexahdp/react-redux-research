import React from 'react';
import { connect } from 'react-redux';

const app = () => (
  <div>
    <h1>Panel</h1>
  </div>
);

const mapStateToProps = state => ({
  name: state.name,
});

const mapDispatchToProps = dispatch => ({}); // eslint-disable-line

export default connect(mapStateToProps, mapDispatchToProps)(app);
