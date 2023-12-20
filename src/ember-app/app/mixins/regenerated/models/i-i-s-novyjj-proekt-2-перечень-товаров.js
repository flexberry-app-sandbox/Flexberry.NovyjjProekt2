import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товары: DS.belongsTo('i-i-s-novyjj-proekt-2-товары', { inverse: null, async: false }),
  приходДенег: DS.belongsTo('i-i-s-novyjj-proekt-2-приход-денег', { inverse: 'переченьТоваров', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-перечень-товаров.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-перечень-товаров.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  приходДенег: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-перечень-товаров.validations.приходДенег.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПереченьТоваровE', 'i-i-s-novyjj-proekt-2-перечень-товаров', {
    количество: attr('Количество', { index: 0 }),
    товары: belongsTo('i-i-s-novyjj-proekt-2-товары', 'Товары', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
