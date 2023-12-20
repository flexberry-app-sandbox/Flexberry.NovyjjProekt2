import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПереченьМатMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-2-перечень-мат';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПереченьМатMixin, Validations, {
});

defineProjections(Model);

export default Model;
