import {
  BooleanField,
  BooleanInput,
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

export const BatchList = () => {
  const description = (
    <p>
      Usa esta información para gestionar la disponibilidad de tus productos.
    </p>
  );

  // You can add any additional logic or hooks here if needed
  return (
    <>
      <h1>Remesas</h1>
      {description}
      <List>
        <Datagrid>
          <ReferenceField
            source='product_id'
            reference='product'
            label='Producto'
          />
          <DateField source='production_date' label='Fecha de producción' />
          <DateField source='expiration_date' label='Fecha de caducidad' />
          <NumberField source='weight_per_unit_min' label='Min gr/ud.' />
          <NumberField source='weight_per_unit_max' label='Max gr/ud' />
          <NumberField source='weight_total' label='Gr. totales' />
          <NumberField source='units_total' label='Unidades' />
          <BooleanField source='is_available' label='Disponibilidad' />
        </Datagrid>
      </List>
    </>
  );
};

const CreateEditBatchSelectProduct = () => (
  <ReferenceInput source='product_id' reference='product'>
    <SelectInput label='Producto' validate={required()} />
  </ReferenceInput>
);
const CreateEditBatchProductionDate = () => (
  <DateInput
    source='production_date'
    label='Fecha de producción'
    helperText='Fecha en la que se ha elaborado el producto o en el que el cultivo está listo para ser cosechado. No se mostrará en la web antes de esta fecha.'
    validate={required()}
  />
);
const CreateEditBatchExpirationDate = () => (
  <DateInput
    source='expiration_date'
    label='Fecha de expiración'
    helperText='Fecha en la que el producto elaborado no es apto para el consumo, o en el que la cosecha se echará a perder. Lotes cuya fecha de expiración haya pasado dejarán de mostrarse en la página web'
  />
);
const CreateEditBatchWeightPerUnitMin = () => (
  <NumberInput
    source='weight_per_unit_min'
    label='Min gr/ud'
    helperText='El peso mínimo que puede tener una unidad de este producto. En productos elaborados, peso neto'
  />
);
const CreateEditBatchWeightPerUnitMax = () => (
  <NumberInput
    source='weight_per_unit_max'
    label='Max gr/ud'
    helperText='El peso máximo que puede tener una unidad de este producto (aprox). En productos elaborados, el peso bruto'
  />
);
const CreateEditBatchTotalWeight = () => (
  <NumberInput
    source='weight_total'
    label='Gr. totales'
    helperText='El peso total del lote antes de comenzar su venta'
  />
);
const CreateEditBatchUnitsTotal = () => (
  <NumberInput
    source='units_total'
    label='Uds. totales'
    helperText='La cantidad de productos que componen el lote. En cosechas puede tratarse de una cantidad aproximada. En elaborados, es una cantidad exacta.'
  />
);

const CreateEditBatchProductionCost = () => (
  <NumberInput
    source='production_cost'
    label='Coste de producción'
    format={(value) => value?.toFixed(2)}
    helperText='El coste de producción del lote, útil para llevar el inventario y calcular el precio de venta'
  />
);
export const BatchEdit = () => {
  return (
    <>
      <h1>Editar lote</h1>
      <Edit>
        <SimpleForm>
          <CreateEditBatchSelectProduct />
          <CreateEditBatchProductionDate />
          <CreateEditBatchExpirationDate />
          <CreateEditBatchWeightPerUnitMin />
          <CreateEditBatchWeightPerUnitMax />
          <CreateEditBatchTotalWeight />
          <CreateEditBatchUnitsTotal />
          <CreateEditBatchProductionCost />
          <BooleanInput
            source='is_available'
            label='Se puede vender'
            helperText='Da de baja un lote cuando, a pesar de encontrarse en fecha, la cosecha se haya perdido, se haya contaminado o no sea posible venderlo por cualquier motivo. Los lotes no disponibles no se mostrarán en la página web.'
          />
        </SimpleForm>
      </Edit>
    </>
  );
};
export const BatchCreate = () => {
  return (
    <>
      <h1>Crear un nuevo lote</h1>
      <Create>
        <SimpleForm>
          <CreateEditBatchSelectProduct />
          <CreateEditBatchProductionDate />
          <CreateEditBatchExpirationDate />
          <CreateEditBatchWeightPerUnitMin />
          <CreateEditBatchWeightPerUnitMax />
          <CreateEditBatchTotalWeight />
          <CreateEditBatchUnitsTotal />
        </SimpleForm>
      </Create>
    </>
  );
};
