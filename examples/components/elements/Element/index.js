/**
 *
 * Element
 * @flow
 *
 */

import React, {PropTypes, Component} from 'react';
import strings from './strings';

class Element extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  };

  static defaultProps = {
  };

  render() {
    return (
      <div>{strings.header.title.message}</div>
    );
  }
}

export default Element;
