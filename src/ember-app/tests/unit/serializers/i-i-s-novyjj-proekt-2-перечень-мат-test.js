import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-novyjj-proekt-2-перечень-мат', 'Unit | Serializer | i-i-s-novyjj-proekt-2-перечень-мат', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-novyjj-proekt-2-перечень-мат',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-novyjj-proekt-2-банк',
    'transform:i-i-s-novyjj-proekt-2-единицы',
    'transform:i-i-s-novyjj-proekt-2-расход-приход',
    'transform:i-i-s-novyjj-proekt-2-тип',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
