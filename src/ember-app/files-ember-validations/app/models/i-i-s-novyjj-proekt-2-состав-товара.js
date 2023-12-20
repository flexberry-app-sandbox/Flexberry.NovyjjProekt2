import {
  defineNamespace,
  defineProjections,
  Model as СоставТовараMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-2-состав-товара';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставТовараMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
