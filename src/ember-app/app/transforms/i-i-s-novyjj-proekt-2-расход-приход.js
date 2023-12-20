import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import РасходПриходEnum from '../enums/i-i-s-novyjj-proekt-2-расход-приход';

export default FlexberryEnum.extend({
  enum: РасходПриходEnum,
  sourceType: 'IIS.Novyjj_proekt_2.РасходПриход'
});
