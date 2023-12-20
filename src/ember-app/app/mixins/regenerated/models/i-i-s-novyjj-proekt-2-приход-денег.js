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
  тип: DS.attr('i-i-s-novyjj-proekt-2-тип'),
  клиенты: DS.belongsTo('i-i-s-novyjj-proekt-2-клиенты', { inverse: null, async: false }),
  финансисты: DS.belongsTo('i-i-s-novyjj-proekt-2-финансисты', { inverse: null, async: false }),
  переченьТоваров: DS.hasMany('i-i-s-novyjj-proekt-2-перечень-товаров', { inverse: 'приходДенег', async: false }),
  переченьУслуг: DS.hasMany('i-i-s-novyjj-proekt-2-перечень-услуг', { inverse: 'приходДенег', async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-приход-денег.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-приход-денег.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  расходПриход: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-приход-денег.validations.расходПриход.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-приход-денег.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-приход-денег.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-приход-денег.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  финансисты: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-приход-денег.validations.финансисты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  переченьТоваров: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-приход-денег.validations.переченьТоваров.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  переченьУслуг: {
    descriptionKey: 'models.i-i-s-novyjj-proekt-2-приход-денег.validations.переченьУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриходДенегE', 'i-i-s-novyjj-proekt-2-приход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    финансисты: belongsTo('i-i-s-novyjj-proekt-2-финансисты', 'Финансисты', {
      фИО: attr('ФИО Финансиста', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' }),
    клиенты: belongsTo('i-i-s-novyjj-proekt-2-клиенты', 'Клиенты', {
      фИО: attr('ФИО Клиента', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    расходПриход: attr('Расход/приход', { index: 6 }),
    тип: attr('Тип', { index: 7 }),
    сумма: attr('Сумма', { index: 8 }),
    переченьТоваров: hasMany('i-i-s-novyjj-proekt-2-перечень-товаров', 'Перечень товаров', {
      количество: attr('Количество', { index: 0 }),
      товары: belongsTo('i-i-s-novyjj-proekt-2-товары', 'Товары', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    }),
    переченьУслуг: hasMany('i-i-s-novyjj-proekt-2-перечень-услуг', 'Перечень услуг', {
      количество: attr('Количество', { index: 0 }),
      услуги: belongsTo('i-i-s-novyjj-proekt-2-услуги', 'Услуги', {
        наименование: attr('Наименование', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ПриходДенегL', 'i-i-s-novyjj-proekt-2-приход-денег', {
    iD: attr('ID', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    расходПриход: attr('Расход приход', { index: 2 }),
    тип: attr('Тип', { index: 3 }),
    сумма: attr('Сумма', { index: 4 }),
    финансисты: belongsTo('i-i-s-novyjj-proekt-2-финансисты', 'ФИО', {
      фИО: attr('ФИО', { index: 5 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-novyjj-proekt-2-клиенты', 'ФИО', {
      фИО: attr('ФИО', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
