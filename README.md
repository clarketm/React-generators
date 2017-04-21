# React-generators
Plop generator templates for React using ES6/React best practices 

### Installation
```bash
$ npm install
```

### Configuration
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
$ npm run generators            # generate container, component, element, or route
$ npm run generators:container  # generate container
$ npm run generators:component  # generate component or element
$ npm run generators:route      # generate route
```

### Credits
Special thanks to the folks over at [react-boilerplate](https://www.reactboilerplate.com/) and [scalable-react](https://github.com/scalable-react) for their fantastic boilerplate code!
