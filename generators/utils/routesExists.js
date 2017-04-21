/**
 * routesExists
 *
 * Check whether the routes/index.js file exists
 */

const fs = require('fs');
const appRoutes = require('../paths').appRoutes;
const routes = `${appRoutes}/index.js`;

function routesCreate() {
    return fs.existsSync(routes);
}


module.exports = routesCreate;
