import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.novyjj-proekt-2.caption'),
          title: i18n.t('forms.application.sitemap.novyjj-proekt-2.title'),
          children: [{
            link: 'i-i-s-novyjj-proekt-2-поставщики-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-поставщики-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-поставщики-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-2-материалы-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-материалы-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-2-клиенты-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-клиенты-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-2-финансисты-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-финансисты-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-финансисты-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-2-товары-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-товары-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-2-регистр-оборот-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-регистр-оборот-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-регистр-оборот-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-2-приход-денег-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-приход-денег-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-приход-денег-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-2-расход-денег-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-расход-денег-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-расход-денег-l.title'),
            children: null
          }, {
            link: 'i-i-s-novyjj-proekt-2-услуги-l',
            caption: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-proekt-2.i-i-s-novyjj-proekt-2-услуги-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})