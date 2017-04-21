'use strict';

var path = require('path');
var fs = require('fs');
var appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
    return path.resolve(appDirectory, relativePath);
}

module.exports = {
    appSrc: resolveApp('examples'),
    appElements: resolveApp('examples/components/elements'),
    appComponents: resolveApp('examples/components'),
    appContainers: resolveApp('examples/containers'),
    appRoutes: resolveApp('examples/routes')
};
