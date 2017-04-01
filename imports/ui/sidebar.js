import React, {Component} from 'react';
import { render } from 'react-dom';

export default class Sidebar extends Component {
  render() {
    return(
      <aside role="contentinfo" className="c-sidebar l-content">
        <h2>Kiez name</h2>
      </aside>
    );
  }
}
