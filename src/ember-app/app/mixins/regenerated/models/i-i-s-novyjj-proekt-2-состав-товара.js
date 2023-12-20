import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицы: DS.attr('i-i-s-novyjj-proekt-2-единицы'),
  количество: DS.attr('number'),
  материалы: DS.belongsTo('i-i-s-novyjj-proekt-2-материалы', { inverse: null, async: false }),
  товары: DS.belongsTo('i-i-s-novyjj-proekt-2-товары', { inverse: 'составТовара', async: false })
});

export let ValidationRules = {
  единицы: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-состав-товара.validations.единицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-состав-товара.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материалы: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-состав-товара.validations.материалы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-состав-товара.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставТовараE', 'i-i-s-novyjj-proekt-2-состав-товара', {
    количество: attr('Количество', { index: 0 }),
    единицы: attr('Единицы', { index: 1 }),
    материалы: belongsTo('i-i-s-novyjj-proekt-2-материалы', 'Материалы', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });
};
