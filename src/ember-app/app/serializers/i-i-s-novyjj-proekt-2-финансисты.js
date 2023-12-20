import { Serializer as ФинансистыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-novyjj-proekt-2-финансисты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФинансистыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
