/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import Card from './card';
import DropArea from './drop';

export default () => (
  <div className="row">
    <div className="col-md-4 ">
      <Card />
    </div>
    <div className="col-md-8">
      <DropArea />
    </div>
  </div>
);
