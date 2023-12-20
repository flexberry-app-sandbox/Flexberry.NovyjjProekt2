import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-novyjj-proekt-2-расход-денег', 'Unit | Model | i-i-s-novyjj-proekt-2-расход-денег', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-novyjj-proekt-2-клиенты',
    'model:i-i-s-novyjj-proekt-2-материалы',
    'model:i-i-s-novyjj-proekt-2-перечень-мат',
    'model:i-i-s-novyjj-proekt-2-перечень-товаров',
    'model:i-i-s-novyjj-proekt-2-перечень-услуг',
    'model:i-i-s-novyjj-proekt-2-поставщики',
    'model:i-i-s-novyjj-proekt-2-приход-денег',
    'model:i-i-s-novyjj-proekt-2-расход-денег',
    'model:i-i-s-novyjj-proekt-2-регистр-оборот',
    'model:i-i-s-novyjj-proekt-2-состав-товара',
    'model:i-i-s-novyjj-proekt-2-товары',
    'model:i-i-s-novyjj-proekt-2-услуги',
    'model:i-i-s-novyjj-proekt-2-финансисты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
