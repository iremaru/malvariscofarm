import {
  Create,
  Datagrid,
  DateField,
  DateInput,
  Edit,
  List,
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
} from "react-admin";

export const PriceList = () => (
  <List>
    <Datagrid>
      <ReferenceField source='product_id' reference='product' />
      <NumberField
        source='pvp_eur'
        options={{ style: "currency", currency: "EUR" }}
      />
      <NumberField
        source='pvm_eur'
        options={{ style: "currency", currency: "EUR" }}
      />
      <ReferenceField source='unit_id' reference='unit' />
      <DateField source='sale_date' />
    </Datagrid>
  </List>
);

const CreateEditPriceProduct = () => (
  <ReferenceInput
    source='product_id'
    reference='product'
    label='Producto'
    helperText='Producto al que se le aplicará el precio'
    isRequired
  >
    <SelectInput
      validate={required("Necesitas un producto al que ponerle precio. ¿no?")}
    />
  </ReferenceInput>
);

//Minorista === Retailer
const CreateEditPriceRetailer = () => (
  <NumberInput
    source='pvp_eur'
    label='pvp'
    helperText='Precio de venta al público'
    isRequired
    validate={required("Si no le pones precio, no se precia")}
  />
);
//Mayorista === Wholesale
const CreateEditPriceWholesale = () => (
  <NumberInput
    source='pvm_eur'
    label='pvm'
    helperText='Precio de venta al por mayor'
  />
);
const CreateEditPriceUnit = () => (
  <ReferenceInput
    source='unit_id'
    reference='unit'
    label='Unidad'
    helperText='Unidad sobre la que se aplica el precio'
    isRequired
    defaultValue={0}
  >
    <SelectInput
      validate={required(
        "¿El precio es sobre unidades, litros, migajas o kintales?"
      )}
    />
  </ReferenceInput>
);
const CreateEditPriceSaleDate = () => (
  <DateInput
    source='sale_date'
    label='Fecha de venta'
    helperText='Fecha sobre la que comenzará a aplicarse este precio.'
    validate={required("Pero, ¿pa' cuando se aplica el precio?")}
  />
);

export const PriceEdit = () => (
  <Edit>
    <SimpleForm mode='onBlur' reValidateMode='onBlur'>
      <CreateEditPriceProduct />
      <CreateEditPriceRetailer />
      <CreateEditPriceWholesale />
      <CreateEditPriceUnit />
      <CreateEditPriceSaleDate />
    </SimpleForm>
  </Edit>
);
export const PriceCreate = () => (
  <Create>
    <SimpleForm mode='onBlur' reValidateMode='onBlur'>
      <CreateEditPriceProduct />
      <CreateEditPriceRetailer />
      <CreateEditPriceWholesale />
      <CreateEditPriceUnit />
      <CreateEditPriceSaleDate />
    </SimpleForm>
  </Create>
);
