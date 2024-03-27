import Route from '@ember/routing/route';

export default class TechRoute extends Route {
  model() {
    return ['Ember.js', 'React.js', 'Angular.js'];
  }
}
