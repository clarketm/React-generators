/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');
const appContainers = require('../paths').appContainers;

module.exports = {
  description: 'Add a container',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What is the name of the container?',
    default: 'About',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A container with this name already exists' : true;
      }

      return 'The name is required';
    }
  }, {
    type: 'list',
    name: 'component',
    message: 'Select the base class component:',
    default: 'PureComponent',
    choices: () => ['PureComponent', 'Component']
  }, {
    type: 'confirm',
    name: 'wantFlowTyped',
    default: true,
    message: 'Do you want to use the Flow types?'
  }, {
    type: 'confirm',
    name: 'wantSCSSModules',
    default: false,
    message: 'Do you want to use SCSS modules for styling?'
  }, {
    type: 'confirm',
    name: 'wantActionsAndReducer',
    default: true,
    message: 'Do you want an actions/constants/selectors/reducer for this container?'
  }, {
    type: 'confirm',
    name: 'wantSagas',
    default: true,
    message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)'
  }, {
    type: 'confirm',
    name: 'wantStrings',
    default: true,
    message: 'Do you want strings (i.e. will this container use text)?'
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    const actions = [{
      type: 'add',
      path: `${appContainers}/{{properCase name}}/index.js`,
      templateFile: './container/index.js.hbs',
      abortOnFail: true
    }, {
      type: 'add',
      path: `${appContainers}/{{properCase name}}/tests/index.test.js`,
      templateFile: './container/test.js.hbs',
      abortOnFail: true
    }];

    // If they want a SCSS module file
    if (data.wantSCSSModules) {
      actions.push({
        type: 'add',
        path: `${appContainers}/{{properCase name}}/{{properCase name}}.scss`,
        templateFile: './container/styles.scss.hbs',
        abortOnFail: true
      });
    }

    // If component wants strings
    if (data.wantStrings) {
      actions.push({
        type: 'add',
        path: `${appContainers}/{{properCase name}}/strings.js`,
        templateFile: './container/strings.js.hbs',
        abortOnFail: true
      });
    }

    // If they want actions and a reducer, generate actions.js, constants.js,
    // reducer.js and the corresponding tests for actions and the reducer
    if (data.wantActionsAndReducer) {
      // Actions
      actions.push({
        type: 'add',
        path: `${appContainers}/{{properCase name}}/actions.js`,
        templateFile: './container/actions.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: `${appContainers}/{{properCase name}}/tests/actions.test.js`,
        templateFile: './container/actions.test.js.hbs',
        abortOnFail: true
      });

      // Constants
      actions.push({
        type: 'add',
        path: `${appContainers}/{{properCase name}}/constants.js`,
        templateFile: './container/constants.js.hbs',
        abortOnFail: true
      });

      // Selectors
      actions.push({
        type: 'add',
        path: `${appContainers}/{{properCase name}}/selectors.js`,
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: `${appContainers}/{{properCase name}}/tests/selectors.test.js`,
        templateFile: './container/selectors.test.js.hbs',
        abortOnFail: true
      });

      // Reducer
      actions.push({
        type: 'add',
        path: `${appContainers}/{{properCase name}}/reducer.js`,
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: `${appContainers}/{{properCase name}}/tests/reducer.test.js`,
        templateFile: './container/reducer.test.js.hbs',
        abortOnFail: true
      });
    }

    // Sagas
    if (data.wantSagas) {
      actions.push({
        type: 'add',
        path: `${appContainers}/{{properCase name}}/sagas.js`,
        templateFile: './container/sagas.js.hbs',
        abortOnFail: true
      });
      actions.push({
        type: 'add',
        path: `${appContainers}/{{properCase name}}/tests/sagas.test.js`,
        templateFile: './container/sagas.test.js.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
