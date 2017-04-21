/**
 * Route Generator
 */
const fs = require('fs');
const path = require('path');
const paths = require('../paths');
const componentExists = require('../utils/componentExists');
const routesExists = require('../utils/routesExists');
const {getLast, setLast} = require('../utils/previousAnswer');
const appRoutes = paths.appRoutes;
const appContainers = paths.appContainers;

function reducerExists(comp) {
  try {
    fs.accessSync(`${appContainers}/${comp}/reducer.js`, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function sagasExists(comp) {
  try {
    fs.accessSync(`${appSrc}/containers/${comp}/sagas.js`, fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function trimTemplateFile(template) {
  // Loads the template file and trims the whitespace and then returns the content as a string.
  return fs.readFileSync(path.join(__dirname, `./${template}`), 'utf8').replace(/\s*$/, '');
}

module.exports = {
  description: 'Add a route',
  prompts: [{
    type: 'input',
    name: 'component',
    message: 'Which component should the route show?',
    validate: (value) => {
      if ((/.+/).test(value)) {
        setLast(value);
        return componentExists(value) ? true : `"${value}" doesn't exist.`;
      }

      return 'The component is required';
    }
  }, {
    type: 'input',
    name: 'path',
    message: 'Enter the path of the route.',
    default: getLast,
    validate: (value) => {
      if ((/.+/).test(value)) {
        return true;
      }

      return 'path is required';
    }
  }],

  // Add the route to the routes.js file above the error route
  actions: (data) => {
    const actions = [];
    if (!routesExists()) {
      actions.push({
        type: 'add',
        path: `${appRoutes}/index.js`,
        templateFile: './route/routes.js.hbs',
        abortOnFail: true
      });
    }
    // TODO: import in the appropriate helper functions to make the below snippet viable
    // if (reducerExists(data.component)) {
    //   data.useSagas = sagasExists(data.component); // eslint-disable-line no-param-reassign
    //   actions.push({
    //     type: 'modify',
    //     path: `${appRoutes}/index.js`,
    //     pattern: /(routes = \[)/g,
    //     template: trimTemplateFile('routeWithReducer.hbs')
    //   });
    // } else {
      actions.push({
        type: 'modify',
        path: `${appRoutes}/index.js`,
        pattern: /(routes = \[)/g,
        template: trimTemplateFile('route.hbs')
      });
    // }

    return actions;
  }
};
