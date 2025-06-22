import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const CategoryList = () => {
  const description = (
    <p>
      Especialmente útil para que los usuarios busquen productos en base al tipo
      de alimento que necesitan.
      <br />
      Puedes convertir una{" "}
      <span className='text_remarked'>categoría general</span> en una{" "}
      <span className='text_remarked'>subcategoría</span> asignándole una
      categoría superior a esta.
    </p>
  );
  return (
    <>
      <h1>Categorías de productos</h1>
      {description}
      <List>
        <Datagrid size='medium'>
          <TextField source='name' />
          <ReferenceField
            source='parent'
            reference='category'
            label='Categoría Superior'
          />
          <DateField source='created_at' />
        </Datagrid>
      </List>
    </>
  );
};
export const CategoryEdit = () => (
  <>
    <h1>Edit Category</h1>
  </>
);
export const CategoryCreate = () => (
  <>
    <h1>Create Category</h1>
  </>
);
