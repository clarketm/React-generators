const errorLoading = (err) => console.error('Dynamic page loading failed', err);
const loadModule = (cb) => (componentModule) => cb(null, componentModule.default);

export const routes = [
    {
      path: '/component',
      name: 'Component',
      getComponent(location, cb) {
        System.import('../components/Component')
          .then(loadModule(cb))
          .catch(errorLoading);
      }
    },
    {
      path: '/purecontainer',
      name: 'PureContainer',
      getComponent(location, cb) {
        System.import('../containers/PureContainer')
          .then(loadModule(cb))
          .catch(errorLoading);
      }
    },
];
