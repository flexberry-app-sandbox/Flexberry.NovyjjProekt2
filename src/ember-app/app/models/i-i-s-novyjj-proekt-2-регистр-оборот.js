import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РегистрОборотMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-2-регистр-оборот';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РегистрОборотMixin, Validations, {
});

defineProjections(Model);

export default Model;
