import {
  defineNamespace,
  defineProjections,
  Model as МатериалыMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-2-материалы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МатериалыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
