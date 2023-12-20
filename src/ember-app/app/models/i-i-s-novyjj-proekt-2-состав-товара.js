import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СоставТовараMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-proekt-2-состав-товара';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставТовараMixin, Validations, {
});

defineProjections(Model);

export default Model;
