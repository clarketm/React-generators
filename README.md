# React-generators
Plop generator templates for React using ES6/React best practices 

### Installation
```bash
$ npm install
```

### Configuration
#### Path configuration (for generated files)
```js
// <project>/React-generators/generators/paths.js

appSrc: resolveApp('examples'),                             // `src` directory
appElements: resolveApp('examples/components/elements'),    // `elements` directory
appComponents: resolveApp('examples/components'),           // `components` directory
appContainers: resolveApp('examples/containers'),           // `containers` directory
appRoutes: resolveApp('examples/routes')                    // `routes` directory
```

### Usage
```bash
$ npm run generators            # generate container, component, or route
$ npm run generators:container  # generate container
$ npm run generators:component  # generate component
$ npm run generators:route      # generate route
```
