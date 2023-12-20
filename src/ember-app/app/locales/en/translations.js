import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNovyjj_proekt_2КлиентыLForm from './forms/i-i-s-novyjj-proekt-2-клиенты-l';
import IISNovyjj_proekt_2МатериалыLForm from './forms/i-i-s-novyjj-proekt-2-материалы-l';
import IISNovyjj_proekt_2ПоставщикиLForm from './forms/i-i-s-novyjj-proekt-2-поставщики-l';
import IISNovyjj_proekt_2ПриходДенегLForm from './forms/i-i-s-novyjj-proekt-2-приход-денег-l';
import IISNovyjj_proekt_2РасходДенегLForm from './forms/i-i-s-novyjj-proekt-2-расход-денег-l';
import IISNovyjj_proekt_2РегистрОборотLForm from './forms/i-i-s-novyjj-proekt-2-регистр-оборот-l';
import IISNovyjj_proekt_2ТоварыLForm from './forms/i-i-s-novyjj-proekt-2-товары-l';
import IISNovyjj_proekt_2УслугиLForm from './forms/i-i-s-novyjj-proekt-2-услуги-l';
import IISNovyjj_proekt_2ФинансистыLForm from './forms/i-i-s-novyjj-proekt-2-финансисты-l';
import IISNovyjj_proekt_2КлиентыEForm from './forms/i-i-s-novyjj-proekt-2-клиенты-e';
import IISNovyjj_proekt_2МатериалыEForm from './forms/i-i-s-novyjj-proekt-2-материалы-e';
import IISNovyjj_proekt_2ПоставщикиEForm from './forms/i-i-s-novyjj-proekt-2-поставщики-e';
import IISNovyjj_proekt_2ПриходДенегEForm from './forms/i-i-s-novyjj-proekt-2-приход-денег-e';
import IISNovyjj_proekt_2РасходДенегEForm from './forms/i-i-s-novyjj-proekt-2-расход-денег-e';
import IISNovyjj_proekt_2РегистрОборотEForm from './forms/i-i-s-novyjj-proekt-2-регистр-оборот-e';
import IISNovyjj_proekt_2ТоварыEForm from './forms/i-i-s-novyjj-proekt-2-товары-e';
import IISNovyjj_proekt_2УслугиEForm from './forms/i-i-s-novyjj-proekt-2-услуги-e';
import IISNovyjj_proekt_2ФинансистыEForm from './forms/i-i-s-novyjj-proekt-2-финансисты-e';
import IISNovyjj_proekt_2КлиентыModel from './models/i-i-s-novyjj-proekt-2-клиенты';
import IISNovyjj_proekt_2МатериалыModel from './models/i-i-s-novyjj-proekt-2-материалы';
import IISNovyjj_proekt_2ПереченьМатModel from './models/i-i-s-novyjj-proekt-2-перечень-мат';
import IISNovyjj_proekt_2ПереченьТоваровModel from './models/i-i-s-novyjj-proekt-2-перечень-товаров';
import IISNovyjj_proekt_2ПереченьУслугModel from './models/i-i-s-novyjj-proekt-2-перечень-услуг';
import IISNovyjj_proekt_2ПоставщикиModel from './models/i-i-s-novyjj-proekt-2-поставщики';
import IISNovyjj_proekt_2ПриходДенегModel from './models/i-i-s-novyjj-proekt-2-приход-денег';
import IISNovyjj_proekt_2РасходДенегModel from './models/i-i-s-novyjj-proekt-2-расход-денег';
import IISNovyjj_proekt_2РегистрОборотModel from './models/i-i-s-novyjj-proekt-2-регистр-оборот';
import IISNovyjj_proekt_2СоставТовараModel from './models/i-i-s-novyjj-proekt-2-состав-товара';
import IISNovyjj_proekt_2ТоварыModel from './models/i-i-s-novyjj-proekt-2-товары';
import IISNovyjj_proekt_2УслугиModel from './models/i-i-s-novyjj-proekt-2-услуги';
import IISNovyjj_proekt_2ФинансистыModel from './models/i-i-s-novyjj-proekt-2-финансисты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-novyjj-proekt-2-клиенты': IISNovyjj_proekt_2КлиентыModel,
    'i-i-s-novyjj-proekt-2-материалы': IISNovyjj_proekt_2МатериалыModel,
    'i-i-s-novyjj-proekt-2-перечень-мат': IISNovyjj_proekt_2ПереченьМатModel,
    'i-i-s-novyjj-proekt-2-перечень-товаров': IISNovyjj_proekt_2ПереченьТоваровModel,
    'i-i-s-novyjj-proekt-2-перечень-услуг': IISNovyjj_proekt_2ПереченьУслугModel,
    'i-i-s-novyjj-proekt-2-поставщики': IISNovyjj_proekt_2ПоставщикиModel,
    'i-i-s-novyjj-proekt-2-приход-денег': IISNovyjj_proekt_2ПриходДенегModel,
    'i-i-s-novyjj-proekt-2-расход-денег': IISNovyjj_proekt_2РасходДенегModel,
    'i-i-s-novyjj-proekt-2-регистр-оборот': IISNovyjj_proekt_2РегистрОборотModel,
    'i-i-s-novyjj-proekt-2-состав-товара': IISNovyjj_proekt_2СоставТовараModel,
    'i-i-s-novyjj-proekt-2-товары': IISNovyjj_proekt_2ТоварыModel,
    'i-i-s-novyjj-proekt-2-услуги': IISNovyjj_proekt_2УслугиModel,
    'i-i-s-novyjj-proekt-2-финансисты': IISNovyjj_proekt_2ФинансистыModel
  },

  'application-name': 'Novyjj_proekt_2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Novyjj_proekt_2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Novyjj_proekt_2',
          title: 'Novyjj_proekt_2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'novyjj-proekt-2': {
          caption: 'Novyjj_proekt_2',
          title: 'Novyjj_proekt_2',
          'i-i-s-novyjj-proekt-2-поставщики-l': {
            caption: 'Поставщики',
            title: ''
          },
          'i-i-s-novyjj-proekt-2-материалы-l': {
            caption: 'Материалы',
            title: ''
          },
          'i-i-s-novyjj-proekt-2-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-novyjj-proekt-2-финансисты-l': {
            caption: 'Финансисты',
            title: ''
          },
          'i-i-s-novyjj-proekt-2-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-novyjj-proekt-2-регистр-оборот-l': {
            caption: 'Регистр оборот',
            title: ''
          },
          'i-i-s-novyjj-proekt-2-приход-денег-l': {
            caption: 'Приход денег',
            title: ''
          },
          'i-i-s-novyjj-proekt-2-расход-денег-l': {
            caption: 'Расход денег',
            title: ''
          },
          'i-i-s-novyjj-proekt-2-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-novyjj-proekt-2-клиенты-l': IISNovyjj_proekt_2КлиентыLForm,
    'i-i-s-novyjj-proekt-2-материалы-l': IISNovyjj_proekt_2МатериалыLForm,
    'i-i-s-novyjj-proekt-2-поставщики-l': IISNovyjj_proekt_2ПоставщикиLForm,
    'i-i-s-novyjj-proekt-2-приход-денег-l': IISNovyjj_proekt_2ПриходДенегLForm,
    'i-i-s-novyjj-proekt-2-расход-денег-l': IISNovyjj_proekt_2РасходДенегLForm,
    'i-i-s-novyjj-proekt-2-регистр-оборот-l': IISNovyjj_proekt_2РегистрОборотLForm,
    'i-i-s-novyjj-proekt-2-товары-l': IISNovyjj_proekt_2ТоварыLForm,
    'i-i-s-novyjj-proekt-2-услуги-l': IISNovyjj_proekt_2УслугиLForm,
    'i-i-s-novyjj-proekt-2-финансисты-l': IISNovyjj_proekt_2ФинансистыLForm,
    'i-i-s-novyjj-proekt-2-клиенты-e': IISNovyjj_proekt_2КлиентыEForm,
    'i-i-s-novyjj-proekt-2-материалы-e': IISNovyjj_proekt_2МатериалыEForm,
    'i-i-s-novyjj-proekt-2-поставщики-e': IISNovyjj_proekt_2ПоставщикиEForm,
    'i-i-s-novyjj-proekt-2-приход-денег-e': IISNovyjj_proekt_2ПриходДенегEForm,
    'i-i-s-novyjj-proekt-2-расход-денег-e': IISNovyjj_proekt_2РасходДенегEForm,
    'i-i-s-novyjj-proekt-2-регистр-оборот-e': IISNovyjj_proekt_2РегистрОборотEForm,
    'i-i-s-novyjj-proekt-2-товары-e': IISNovyjj_proekt_2ТоварыEForm,
    'i-i-s-novyjj-proekt-2-услуги-e': IISNovyjj_proekt_2УслугиEForm,
    'i-i-s-novyjj-proekt-2-финансисты-e': IISNovyjj_proekt_2ФинансистыEForm
  },

});

export default translations;
