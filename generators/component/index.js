/**
 * Component Generator
 */

'use strict';

const paths = require('../paths');
const componentExists = require('../utils/componentExists');
const appComponents = paths.appComponents;
const appElements = paths.appElements;

module.exports = {
  description: 'Add an component',
  prompts: [{
    type: 'list',
    name: 'component',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class (Pure)', 'ES6 Class']
  }, {
    type: 'input',
    name: 'name',
    message: 'What is the name of the component?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component with this name already exists' : true;
      }

      return 'The name is required';
    }
  }, {
    type: 'confirm',
    name: 'isAnElement',
    default: false,
    message: 'Is this an Element (i.e. put in the /element directory)'
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
    name: 'wantStrings',
    default: true,
    message: 'Do you want strings (i.e. will this container use text)?'
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;
    let basePath = data.isAnElement ?
      appElements :
      appComponents;

    switch (data.component) {
      case 'ES6 Class': {
        data.component = 'Component';
        componentTemplate = './component/es6.js.hbs';
        break;
      }
      case 'ES6 Class (Pure)': {
        data.component = 'PureComponent';
        componentTemplate = './component/es6.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/es6.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: `${basePath}/{{properCase name}}/index.js`,
      templateFile: componentTemplate,
      abortOnFail: true
    }, {
      type: 'add',
      path: `${basePath}/{{properCase name}}/tests/index.test.js`,
      templateFile: './component/test.js.hbs',
      abortOnFail: true
    }];

    // If they want a SCSS module file
    if (data.wantSCSSModules) {
      actions.push({
        type: 'add',
        path: `${basePath}/{{properCase name}}/{{properCase name}}.scss`,
        templateFile: './component/styles.scss.hbs',
        abortOnFail: true
      });
    }

    // If they want a i18n strings file
    if (data.wantStrings) {
      actions.push({
        type: 'add',
        path: `${basePath}/{{properCase name}}/strings.js`,
        templateFile: './component/strings.js.hbs',
        abortOnFail: true
      });
    }

    return actions;
  }
};
