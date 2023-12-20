import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-novyjj-proekt-2-клиенты-l');
  this.route('i-i-s-novyjj-proekt-2-клиенты-e',
  { path: 'i-i-s-novyjj-proekt-2-клиенты-e/:id' });
  this.route('i-i-s-novyjj-proekt-2-клиенты-e.new',
  { path: 'i-i-s-novyjj-proekt-2-клиенты-e/new' });
  this.route('i-i-s-novyjj-proekt-2-материалы-l');
  this.route('i-i-s-novyjj-proekt-2-материалы-e',
  { path: 'i-i-s-novyjj-proekt-2-материалы-e/:id' });
  this.route('i-i-s-novyjj-proekt-2-материалы-e.new',
  { path: 'i-i-s-novyjj-proekt-2-материалы-e/new' });
  this.route('i-i-s-novyjj-proekt-2-поставщики-l');
  this.route('i-i-s-novyjj-proekt-2-поставщики-e',
  { path: 'i-i-s-novyjj-proekt-2-поставщики-e/:id' });
  this.route('i-i-s-novyjj-proekt-2-поставщики-e.new',
  { path: 'i-i-s-novyjj-proekt-2-поставщики-e/new' });
  this.route('i-i-s-novyjj-proekt-2-приход-денег-l');
  this.route('i-i-s-novyjj-proekt-2-приход-денег-e',
  { path: 'i-i-s-novyjj-proekt-2-приход-денег-e/:id' });
  this.route('i-i-s-novyjj-proekt-2-приход-денег-e.new',
  { path: 'i-i-s-novyjj-proekt-2-приход-денег-e/new' });
  this.route('i-i-s-novyjj-proekt-2-расход-денег-l');
  this.route('i-i-s-novyjj-proekt-2-расход-денег-e',
  { path: 'i-i-s-novyjj-proekt-2-расход-денег-e/:id' });
  this.route('i-i-s-novyjj-proekt-2-расход-денег-e.new',
  { path: 'i-i-s-novyjj-proekt-2-расход-денег-e/new' });
  this.route('i-i-s-novyjj-proekt-2-регистр-оборот-l');
  this.route('i-i-s-novyjj-proekt-2-регистр-оборот-e',
  { path: 'i-i-s-novyjj-proekt-2-регистр-оборот-e/:id' });
  this.route('i-i-s-novyjj-proekt-2-регистр-оборот-e.new',
  { path: 'i-i-s-novyjj-proekt-2-регистр-оборот-e/new' });
  this.route('i-i-s-novyjj-proekt-2-товары-l');
  this.route('i-i-s-novyjj-proekt-2-товары-e',
  { path: 'i-i-s-novyjj-proekt-2-товары-e/:id' });
  this.route('i-i-s-novyjj-proekt-2-товары-e.new',
  { path: 'i-i-s-novyjj-proekt-2-товары-e/new' });
  this.route('i-i-s-novyjj-proekt-2-услуги-l');
  this.route('i-i-s-novyjj-proekt-2-услуги-e',
  { path: 'i-i-s-novyjj-proekt-2-услуги-e/:id' });
  this.route('i-i-s-novyjj-proekt-2-услуги-e.new',
  { path: 'i-i-s-novyjj-proekt-2-услуги-e/new' });
  this.route('i-i-s-novyjj-proekt-2-финансисты-l');
  this.route('i-i-s-novyjj-proekt-2-финансисты-e',
  { path: 'i-i-s-novyjj-proekt-2-финансисты-e/:id' });
  this.route('i-i-s-novyjj-proekt-2-финансисты-e.new',
  { path: 'i-i-s-novyjj-proekt-2-финансисты-e/new' });
});

export default Router;
