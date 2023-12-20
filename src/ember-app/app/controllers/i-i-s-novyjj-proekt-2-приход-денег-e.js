import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-novyjj-proekt-2-приход-денег-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-novyjj-proekt-2-перечень-товаров+товары':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'товары',
            projection: 'ТоварыL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-novyjj-proekt-2-перечень-услуг+услуги':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'услуги',
            projection: 'УслугиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
