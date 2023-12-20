import {
  defineNamespace,
  defineProjections,
  Model as ПереченьУслугMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-2-перечень-услуг';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПереченьУслугMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
