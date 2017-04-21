/**
 *
 * PureContainer
 * @flow
 *
 */

import React, {PropTypes, PureComponent} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Helmet from 'react-helmet';
import makeSelectPureContainer from './selectors';
import strings from './strings';

export class PureContainer extends PureComponent {
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

const mapStateToProps = createStructuredSelector({
  pureContainer: makeSelectPureContainer()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PureContainer);
