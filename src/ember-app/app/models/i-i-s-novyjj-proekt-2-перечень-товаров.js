import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПереченьТоваровMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-2-перечень-товаров';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПереченьТоваровMixin, Validations, {
});

defineProjections(Model);

export default Model;
