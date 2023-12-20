import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата: DS.attr('date'),
  расходПриход: DS.attr('i-i-s-novyjj-proekt-2-расход-приход'),
  сумма: DS.attr('decimal'),
  тип: DS.attr('i-i-s-novyjj-proekt-2-тип')
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-регистр-оборот.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-регистр-оборот.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  расходПриход: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-регистр-оборот.validations.расходПриход.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-регистр-оборот.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-регистр-оборот.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрОборотE', 'i-i-s-novyjj-proekt-2-регистр-оборот', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    расходПриход: attr('Расход приход', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    сумма: attr('Сумма', { index: 4 })
  });

  modelClass.defineProjection('РегистрОборотL', 'i-i-s-novyjj-proekt-2-регистр-оборот', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    расходПриход: attr('Расход приход', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    сумма: attr('Сумма', { index: 4 })
  });
};
