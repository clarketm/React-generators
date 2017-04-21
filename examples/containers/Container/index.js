/**
 *
 * Container
 * @flow
 *
 */

import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Helmet from 'react-helmet';
import makeSelectContainer from './selectors';
import strings from './strings';

export class Container extends Component {
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
  container: makeSelectContainer()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
