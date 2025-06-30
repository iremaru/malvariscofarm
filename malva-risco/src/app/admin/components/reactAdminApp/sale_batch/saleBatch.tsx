import {
  ArrayField,
  ChipField,
  Datagrid,
  FunctionField,
  List,
  NumberField,
  ReferenceField,
  SingleFieldList,
  TextField,
} from "react-admin";

export const ProductOnSaleList = () => (
  <List>
    <Datagrid>
      <ReferenceField
        source='family_id'
        reference='product_family'
        label='Familia'
      />
      <TextField source='variety_name' label='variedad' />
      <TextField source='sale_name' label='nombre comercial' />
      <NumberField source='weight_per_unit_min' label='peso mínimo/neto' />
      <NumberField source='weight_per_unit_max' label='peso máximo/bruto' />
      <ArrayField source='categories' label='Categorías'>
        <SingleFieldList>
          <ChipField source='displayName' />
        </SingleFieldList>
      </ArrayField>
      <FunctionField
        source='current_stock'
        label='stock disponible'
        render={(record) =>
          `${record.current_stock} ${
            record.current_stock === 1 ? "ud." : "uds."
          }`
        }
      />
      <ArrayField source='sale_prices' label='PVP'>
        <SingleFieldList>
          <NumberField
            source='pvm'
            options={{ style: "currency", currency: "EUR" }}
          />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source='sale_prices' label='PVM'>
        <SingleFieldList>
          <NumberField
            source='pvm'
            options={{ style: "currency", currency: "EUR" }}
          />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);
