/**
 *
 * PureComponent
 * @flow
 *
 */

import React, {PropTypes, PureComponent} from 'react';
import strings from './strings';

class PureComponent extends PureComponent {
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

export default PureComponent;
