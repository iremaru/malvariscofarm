import {
  Create,
  Datagrid,
  DeleteButton,
  Edit,
  List,
  ListButton,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const ProductFamilyList = () => {
  const description = (
    <p>
      Registra aquí los nombres de la familia o la variedad de un cultivo, de
      tal forma que puedas diferenciar dos tipos de tomates o de manzanas.
    </p>
  );
  return (
    <>
      <h1>Familia de producto</h1>
      {description}
      <List>
        <Datagrid size='medium'>
          <TextField source='name' label='Nombre de la variedad' />
          <TextField source='name_readable' label='Nombre comercial' />
          <DeleteButton label='Eliminar variedad' />
        </Datagrid>
      </List>
    </>
  );
};

export const ProductFamilyEdit = () => (
  <Edit>
    <ListButton />
    <SimpleForm>
      <TextInput source='name' label='Nombre de la variedad' />
      <TextInput source='name_readable' label='Nombre comercial' />
    </SimpleForm>
  </Edit>
);
export const ProductFamilyCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source='name' label='Nombre de la variedad' />
      <TextInput source='name_readable' label='Nombre comercial' />
    </SimpleForm>
  </Create>
);
