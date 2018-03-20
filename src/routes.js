import asyncComponent from './components/AsyncComponent';
import { nextNumber } from './utils/general';

const nextRouteIndex = nextNumber();

const createRoute = (url, name, component, exact = false) => ({
  index: nextRouteIndex(),
  name: name,
  path: url,
  component,
  exact,
});

export default [
  // createRoute(
  //   '/',
  //   'Home',
  //   Home,
  //   true),
  createRoute(
    '/home',
    'Home',
    asyncComponent(() =>
      import('./pages/Home.js').then(module => module.default),
    ),
  ),
  createRoute(
    '/scanning',
    'Aircraft Scanning',
    asyncComponent(() =>
      import('./pages/AircraftScanning.js').then(module => module.default),
    ),
  ),
];
