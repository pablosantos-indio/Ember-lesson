import { module, test } from 'qunit';
import { setupTest } from 'ember-lesson/tests/helpers';

module('Unit | Route | rome', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:rome');
    assert.ok(route);
  });
});
