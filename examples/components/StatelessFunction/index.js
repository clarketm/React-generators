/**
 *
 * StatelessFunction
 * @flow
 *
 */

import React, {PropTypes} from 'react';
import strings from './strings';

const StatelessFunction = () => {
  return (
    <div>{strings.header.title.message}</div>
  );
};

StatelessFunction.propTypes = {
};

export default StatelessFunction;
