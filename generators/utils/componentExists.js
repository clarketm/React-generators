/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const paths = require('../paths');
const pageComponents = fs.readdirSync(paths.appComponents);
const pageContainers = fs.readdirSync(paths.appContainers);
const components = pageComponents.concat(pageContainers);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
