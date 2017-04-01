import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/app';
import Map from '../imports/ui/map';

Meteor.startup(() => {
  render(<App/>, document.getElementById('render-target'));
  render(<Map/>, document.getElementById('map'));

});
