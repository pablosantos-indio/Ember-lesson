import Route from '@ember/routing/route';

export default class RomeRoute extends Route {
  model() {
    return ['Julius Caesar', 'Augustus', 'Nero'];
  }
}
