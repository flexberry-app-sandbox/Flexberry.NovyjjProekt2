import { Serializer as МатериалыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-novyjj-proekt-2-материалы';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МатериалыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
