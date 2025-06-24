import {
  ArrayField,
  ArrayInput,
  ChipField,
  Create,
  CreateButton,
  Datagrid,
  DateField,
  Edit,
  ExportButton,
  FunctionField,
  ImageField,
  ImageInput,
  List,
  /* FilterButton,
  ListActions,
  SelectColumnsButton, */
  ReferenceField,
  ReferenceInput,
  required,
  SimpleForm,
  SimpleFormIterator,
  SingleFieldList,
  TextField,
  TextInput,
  TopToolbar,
  useRecordContext,
} from "react-admin";
import Image from "next/image";

const ProductListActions = () => (
  <TopToolbar>
    {/*
    <SelectColumnsButton />
	 <FilterButton /> 
	*/}
    <CreateButton resource='product' />
    <ExportButton />
  </TopToolbar>
);

export const ProductList = () => {
  return (
    <div>
      <h1>Productos Registrados</h1>
      <List actions={<ProductListActions />}>
        <Datagrid size='medium' rowClick={(id) => `/product/${id}`}>
          <FunctionField
            label='Imagen'
            render={(record) =>
              record.img_url ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${record.img_url}`}
                  alt={`Imagen de ${record.variety_name}`}
                  width='100'
                  height='100'
                  style={{ objectFit: "cover" }}
                />
              ) : (
                "—"
              )
            }
          />
          <ReferenceField
            source='family_id'
            reference='product_family'
            label='Familia'
          />
          <TextField source='variety_name' label='Variedad' />
          <TextField source='sale_name' label='Nombre comercial' />
          <TextField source='description' label='Descripción' />
          <TextField
            source='preservation_instructions'
            label='Instrucciones de preservación'
          />
          <ArrayField source='categories' label='Categorías'>
            <SingleFieldList>
              <ChipField
                source='displayName'
                label='Nombre de la categoría'
                sx={{ maxWidth: "200px" }}
              />
            </SingleFieldList>
          </ArrayField>
          <DateField source='created_at' label='Fecha de creación' />
        </Datagrid>
      </List>
    </div>
  );
};

const CreateEditProductFamily = () => (
  <ReferenceInput
    source='family_id'
    reference='product_family'
    label='Familia científica'
  />
);
const CreateEditProductVariety = () => (
  <TextInput source='variety_name' label='Nombre de la variedad' />
);
const CreateEditProductSaleName = () => (
  <TextInput
    source='sale_name'
    label='Nombre comercial'
    required
    validate={required(
      "Es necesario poner un nombre comercial para mostrarlo en la web"
    )}
  />
);
const CreateEditProductDescription = () => (
  <TextInput
    source='description'
    label='descripción'
    helperText='Descripción para mostrar en la web'
  />
);
const CreateEditProductPreservation = () => (
  <ArrayInput
    source='preservation_instructions'
    label='Instrucciones de conservación'
  >
    <SimpleFormIterator>
      <TextInput source='' />
    </SimpleFormIterator>
  </ArrayInput>
);
const CreateEditProductImg = () => {
  const record = useRecordContext();
  return (
    <ImageInput source='img_url' label='Imagen del producto'>
      {record?.img_url ? (
        <Image
          alt={`Imagen de ${record?.variety_name}`}
          src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}${record?.img_url}`}
          width='100'
          height='100'
          style={{ objectFit: "cover" }}
        />
      ) : (
        <ImageField source='src' />
      )}
    </ImageInput>
  );
};

export const ProductEdit = () => {
  return (
    <div>
      <h1>Edit Product</h1>
      <Edit redirect={() => `/product_with_categories`}>
        <SimpleForm mode='onBlur' reValidateMode='onBlur'>
          <CreateEditProductFamily />
          <CreateEditProductVariety />
          <CreateEditProductSaleName />
          <CreateEditProductDescription />
          <CreateEditProductPreservation />
          <CreateEditProductImg />
        </SimpleForm>
      </Edit>
    </div>
  );
};

export const ProductCreate = () => {
  return (
    <div>
      <h1>Create Product</h1>
      <Create redirect={() => `/product_with_categories`}>
        <SimpleForm mode='onBlur' reValidateMode='onBlur'>
          <CreateEditProductFamily />
          <CreateEditProductVariety />
          <CreateEditProductSaleName />
          <CreateEditProductDescription />
          <CreateEditProductPreservation />
          <CreateEditProductImg />
        </SimpleForm>
      </Create>
    </div>
  );
};
