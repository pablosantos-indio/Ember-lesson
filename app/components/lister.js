import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ListerComponent extends Component {
  @action
  showItem(item) {
    alert(`You selected ${item} !`);
  }
}
