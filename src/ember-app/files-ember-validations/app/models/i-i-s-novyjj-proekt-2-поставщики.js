import {
  defineNamespace,
  defineProjections,
  Model as ПоставщикиMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-2-поставщики';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПоставщикиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
